import * as z from "zod";

// 공통 기본 스키마
export const baseSchema = {
  email: z.string().min(1, { message: "이메일을 입력해주세요." }).email({ message: "올바른 이메일 형식을 입력해주세요." }),
  password: z.string().min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
  confirmPassword: z.string(),
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  phone: z.string().optional(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "이용약관에 동의해주세요.",
  }),
  agreePrivacy: z.boolean().refine((val) => val === true, {
    message: "개인정보 처리방침에 동의해주세요.",
  }),
  agreeMarketing: z.boolean().optional(),
};

// 기업용 스키마
export const companySchema = z.object({
  ...baseSchema,
  company: z.string().min(1, { message: "회사명을 입력해주세요." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다.",
  path: ["confirmPassword"],
});

// 아티스트용 스키마
export const artistSchema = z.object({
  ...baseSchema,
  category: z.string().min(1, { message: "전문 분야를 선택해주세요." }),
  experience: z.string().optional(),
  bio: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다.",
  path: ["confirmPassword"],
});

export type CompanyFormValues = z.infer<typeof companySchema>;
export type ArtistFormValues = z.infer<typeof artistSchema>;