"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Container from "@/app/_components/container";
import {
  ProjectFormValues,
  projectSchema,
} from "@/app/(with-gnb)/projects/create/_schema";

export default function ProjectCreationPage() {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      projectCategory: "",
      description: "",
      category1: "",
      category2: "",
      category3: "",
      teamRole: "",
      career: "",
      projectStartDate: "",
      projectEndDate: "",
      isResident: false,
      activeArea: "",
      budget: "",
      portfolios: [],
      url: "",
      recruitment: 1,
      recruitStartDate: "",
      recruitEndDate: "",
    },
  });

  const onSubmit = (values: ProjectFormValues) => {
    console.log("Project creation:", values);
    // 실제 프로젝트 생성 로직은 여기에 구현
  };

  return (
    <Container className="flex flex-row gap-10 py-10 px-5">
      <Form {...form}>
        <form
          className="flex w-full flex-row gap-[60px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-[652px]">
            <div>
              <h1 className="font-semibold text-gray-950 text-[28px]">
                프로젝트 등록하기
              </h1>
            </div>

            <div className="space-y-5">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>프로젝트 제목</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@email.com"
                        className="mt-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>프로젝트 분야</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="분야를 선택" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="music">음악</SelectItem>
                        <SelectItem value="visual">시각예술</SelectItem>
                        <SelectItem value="performance">공연</SelectItem>
                        <SelectItem value="media">미디어</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>프로젝트 상세 설명</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Value"
                        className="mt-1 min-h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>참여 희망 분야</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="분야" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="composer">작곡</SelectItem>
                        <SelectItem value="performer">연주</SelectItem>
                        <SelectItem value="producer">프로듀싱</SelectItem>
                        <SelectItem value="engineer">엔지니어링</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>희망 분야</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="수준" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">초급</SelectItem>
                        <SelectItem value="intermediate">중급</SelectItem>
                        <SelectItem value="advanced">고급</SelectItem>
                        <SelectItem value="professional">전문가</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>희망 분야</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="상금 수준" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1week">1주일</SelectItem>
                        <SelectItem value="1month">1개월</SelectItem>
                        <SelectItem value="3months">3개월</SelectItem>
                        <SelectItem value="6months">6개월</SelectItem>
                        <SelectItem value="longterm">장기</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  <span>의뢰인 유형</span>
                  <span className="text-red-500 pl-0.5">*</span>
                </label>
                <FormField
                  control={form.control}
                  name="teamRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-4">
                          <button
                            type="button"
                            className={`px-4 py-2 rounded-md border transition-colors ${
                              field.value === "개인 사업자"
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() => field.onChange("개인 사업자")}
                          >
                            개인 사업자
                          </button>
                          <button
                            type="button"
                            className={`px-4 py-2 rounded-md border transition-colors ${
                              field.value === "사업자"
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() => field.onChange("사업자")}
                          >
                            사업자
                          </button>
                          <button
                            type="button"
                            className={`px-4 py-2 rounded-md border transition-colors ${
                              field.value === "기업 담당자"
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() => field.onChange("기업 담당자")}
                          >
                            기업 담당자
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="career"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>희망 경력</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="경력" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">초급</SelectItem>
                        <SelectItem value="intermediate">중급</SelectItem>
                        <SelectItem value="advanced">고급</SelectItem>
                        <SelectItem value="professional">전문가</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="projectStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span>프로젝트 시작일</span>
                        <span className="text-red-500 pl-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="mt-1"
                          {...field}
                          placeholder="2025.08.16-2025.08.25"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectEndDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span>프로젝트 종료일</span>
                        <span className="text-red-500 pl-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="mt-1"
                          {...field}
                          placeholder="2025.08.16-2025.08.25"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  <span>거주 가능 여부</span>
                  <span className="text-red-500 pl-0.5">*</span>
                </label>
                <FormField
                  control={form.control}
                  name="isResident"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-4">
                          <button
                            type="button"
                            className={`px-4 py-2 rounded-md border transition-colors ${
                              field.value === true
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() => field.onChange(true)}
                          >
                            거주 가능
                          </button>
                          <button
                            type="button"
                            className={`px-4 py-2 rounded-md border transition-colors ${
                              field.value === false
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() => field.onChange(false)}
                          >
                            거주 불가능
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="activeArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>활동 지역</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="서울, 부산, 온라인 등"
                        className="mt-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>예상 예산</span>
                      <span className="text-red-500 pl-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="약 8000만 원 (건설비, 장비 구매비, 배우비, 옷값)"
                        className="mt-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  프로젝트 상세 이미지
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-gray-500 mb-2">📁</div>
                  <p className="text-gray-600">
                    클릭하여 이미지를 첨부해주세요
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    프로젝트를 설명하는 사진 자료, 이미지가 있다면좋아요. (JPG,
                    PDF)
                  </p>
                </div>
              </div>

              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>관련 링크</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://"
                        className="mt-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="sticky top-[120px]">
              <div className="bg-white p-6 rounded-lg border flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="recruitment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span>모집 인원</span>
                        <span className="text-red-500 pl-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          placeholder="모집 인원"
                          className="mt-1"
                          value={field.value}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="recruitStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span>모집 시작일</span>
                        <span className="text-red-500 pl-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="date" className="mt-1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="recruitEndDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span>모집 종료일</span>
                        <span className="text-red-500 pl-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="date" className="mt-1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="brand"
                  disabled={!form.formState.isValid}
                  size="lg"
                  className="w-full"
                >
                  등록하기
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </Container>
  );
}
