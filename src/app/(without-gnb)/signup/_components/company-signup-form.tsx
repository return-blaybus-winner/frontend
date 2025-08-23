"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { companySchema, type CompanyFormValues } from "../_schemas";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { UserRole } from "@/app/_models/user";

export function CompanySignUpForm() {
  const router = useRouter();

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      profileImage: "",
      name: "",
      businessRegistrationNumber: "",
    },
  });

  const onSubmit = (values: CompanyFormValues) => {
    console.log("Company sign up:", values);
    // 실제 회원가입 로직은 여기에 구현
    router.replace("/signup/success/?from=" + UserRole.CORPORATE);
  };

  return (
    <Form {...form}>
      <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <h1 className="font-semibold text-gray-950 text-[28px] whitespace-pre-line">{`기업 회원으로 가입하시나요?`}</h1>
          <p className="mt-3 font-medium text-base text-gray-600">
            무브텀에서 뛰어난 아티스트를 만나보세요.
          </p>
        </div>
        <div className="space-y-5">
          {/* Basic Info */}
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>회사 로고 / 대표 이미지</span>
                  <span className="text-red-500 pl-0.5">*</span>
                </FormLabel>
                {field.value && (
                  <Avatar className="size-[60px]">
                    <AvatarImage src={field.value} />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                )}

                <FormControl>
                  <Input
                    placeholder="회사 로고 / 대표 이미지 URL을 입력하세요"
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>회사명</span>
                  <span className="text-red-500 pl-0.5">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="회사명을 입력하세요"
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
            name="businessRegistrationNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>사업자 등록번호</span>
                  <span className="text-red-500 pl-0.5">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="000-00-00000"
                    className="mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          variant="brand"
          disabled={!form.formState.isValid}
          size="lg"
          className="w-full"
        >
          완료
        </Button>
      </form>
    </Form>
  );
}
