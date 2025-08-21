import * as z from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, { message: "프로젝트 제목을 입력해주세요." }),
  projectCategory: z
    .string()
    .min(1, { message: "프로젝트 분야를 선택해주세요." }),
  description: z
    .string()
    .min(1, { message: "프로젝트 상세 설명을 입력해주세요." }),

  category1: z.string().min(1, { message: "희망 분야를 선택해주세요." }),
  category2: z.string().min(1, { message: "희망 분야를 선택해주세요." }),
  category3: z.string().min(1, { message: "희망 분야를 선택해주세요." }),
  teamRole: z.string().min(1, { message: "의뢰인 유형을 선택해주세요." }),
  career: z.string().min(1, { message: "희망 경력 선택해주세요." }),

  projectStartDate: z
    .string()
    .min(1, { message: "프로젝트 시작일을 선택해주세요." }),
  projectEndDate: z
    .string()
    .min(1, { message: "프로젝트 종료일을 선택해주세요." }),

  isResident: z.boolean(),
  activeArea: z.string().min(1, { message: "활동 지역을 선택해주세요." }),
  budget: z.string().min(1, { message: "예상 예산을 입력해주세요." }),

  images: z.array(z.string()).optional(),
  url: z.string().optional(),

  recruitment: z.number().min(1, { message: "모집 인원을 입력해주세요." }),
  recruitStartDate: z
    .string()
    .min(1, { message: "모집 시작일을 선택해주세요." }),
  recruitEndDate: z.string().min(1, { message: "모집 종료일을 선택해주세요." }),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
