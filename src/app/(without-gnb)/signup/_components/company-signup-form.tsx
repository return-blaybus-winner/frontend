"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
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
import PenIcon from "@/app/_icons/pen-icon";
import { signUpCorporate } from "@/app/_api/corporate";
import { CorporateSignUpDto } from "@/app/_models/corporate";

export function CompanySignUpForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      profileImage: undefined,
      name: "",
      businessRegistrationNumber: "",
    },
  });

  const onSubmit = async (values: CompanyFormValues) => {
    console.log("Company sign up:", values);
    // 실제 회원가입 로직은 여기에 구현
    try {
        const corporateData: CorporateSignUpDto = {
          corporateName: values.name,
          registrationNumber: values.businessRegistrationNumber
        };
      
        // API 호출
        const result = await signUpCorporate(
          corporateData,
          values.profileImage,
        );
    
        console.log("Corporate sign up success:", result);
        router.replace("/signup/success/?from=" + UserRole.ARTIST);
        
      } catch (error) {
        console.error("Corporate sign up failed:", error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
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
                  <span>프로필 이미지</span>
                  <span className="text-red-500 pl-0.5">*</span>
                  <p className="text-xs text-gray-500 pl-2">
                    (jpg, png, webp 형식, 최대 5MB)
                  </p>
                </FormLabel>
                <div className="size-[60px] relative">
                  <Avatar
                    className="size-[60px] cursor-pointer hover:opacity-80"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <AvatarImage src={previewUrl} />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-1 -right-1 rounded-full p-1"
                  >
                    <PenIcon />
                  </Button>
                </div>
                <FormControl>
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        field.onChange(file);
                        const url = URL.createObjectURL(file);
                        setPreviewUrl(url);
                      }
                    }}
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
