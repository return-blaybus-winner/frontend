import * as z from "zod";

// File validation helper
const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "파일 크기는 5MB 이하여야 합니다.",
  })
  .refine(
    (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
    {
      message: "JPG, PNG, WebP 형식의 이미지만 업로드 가능합니다.",
    }
  );

// 공통 기본 스키마
export const baseSchema = {
  profileImage: fileSchema,
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
  portfolioImage: fileSchema,
  portfolio: z.string().optional(),
});

export type CompanyFormValues = z.infer<typeof companySchema>;
export type ArtistFormValues = z.infer<typeof artistSchema>;
