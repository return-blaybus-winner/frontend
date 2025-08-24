/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void;
      isInitialized: () => boolean;
      Auth: {
        authorize: (options: { redirectUri: string; state: string }) => void;
        logout: (callback?: () => void) => void;
        getAccessToken: () => string | null;
      };
      API: {
        request: (options: {
          url: string;
          success: (response: any) => void;
          fail: (error: any) => void;
        }) => void;
      };
    };
  }
}

export interface KakaoUser {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image?: string;
    thumbnail_image?: string;
  };
  kakao_account: {
    profile_needs_agreement?: boolean;
    profile?: {
      nickname: string;
      thumbnail_image_url?: string;
      profile_image_url?: string;
    };
    has_email?: boolean;
    email_needs_agreement?: boolean;
    is_email_valid?: boolean;
    is_email_verified?: boolean;
    email?: string;
  };
}

class KakaoAuth {
  private readonly APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;

  constructor() {
    if (typeof window !== "undefined") {
      this.init();
    }
  }

  private init() {
    if (!this.APP_KEY) {
      console.error("KAKAO_APP_KEY is not defined");
      return;
    }

    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(this.APP_KEY);
    }
  }

  login(): Promise<KakaoUser> {
    return new Promise((resolve, reject) => {
      if (!window.Kakao) {
        reject(new Error("Kakao SDK not loaded"));
        return;
      }
      if (process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI) {
        window.Kakao.Auth.authorize({
          redirectUri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
          state: `${window.location.href}/api/auth/kakao/success`,
        });
      }
    });
  }

  logout(): Promise<void> {
    return new Promise((resolve) => {
      if (window.Kakao && window.Kakao.Auth.getAccessToken()) {
        window.Kakao.Auth.logout(() => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  getUserInfo(): Promise<KakaoUser> {
    return new Promise((resolve, reject) => {
      if (!window.Kakao) {
        reject(new Error("Kakao SDK not loaded"));
        return;
      }

      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (response) => {
          resolve(response as KakaoUser);
        },
        fail: (error) => {
          reject(error);
        },
      });
    });
  }

  isLoggedIn(): boolean {
    return !!(window.Kakao && window.Kakao.Auth.getAccessToken());
  }
}

export const kakaoAuth = new KakaoAuth();
