import * as z from "zod";

// 공통 기본 스키마
export const baseSchema = {
  profileImage: z.string().optional(),
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
};

// 기업용 스키마
export const companySchema = z.object({
  ...baseSchema,
  businessRegistrationNumber: z
    .string()
    .min(1, { message: "사업자 등록번호를 입력해주세요." }),
});

// 아티스트용 스키마
export const artistSchema = z.object({
  ...baseSchema,
  activeArea: z.string().min(1, { message: "활동 지역을 선택해주세요." }),
  portfolioImage: z.string().optional(),
  portfolio: z.string().optional(),
});

export type CompanyFormValues = z.infer<typeof companySchema>;
export type ArtistFormValues = z.infer<typeof artistSchema>;
