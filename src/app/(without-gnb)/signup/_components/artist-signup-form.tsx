"use client";

import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  ArtistFormValues,
  artistSchema,
} from "@/app/(without-gnb)/signup/_schemas";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useRef } from "react";
import SwitchCase from "@/components/utils/switch-case";
import If from "@/components/utils/if";
import { useRouter } from "next/navigation";
import { UserRole } from "@/app/_models/user";
import PenIcon from "@/app/_icons/pen-icon";
import { LOCATION_OPTIONS } from "@/app/(with-gnb)/projects/_constants/projects";

enum SignUpPhase {
  Basic = "basic",
  Portfolio = "portfolio",
}

export function ArtistSignUpForm() {
  const router = useRouter();
  const [profilePreviewUrl, setProfilePreviewUrl] = useState<string>("");
  const [portfolioPreviewUrl, setPortfolioPreviewUrl] = useState<string>("");

  const [phase, setPhase] = useState<SignUpPhase>(SignUpPhase.Basic);

  const form = useForm<ArtistFormValues>({
    resolver: zodResolver(artistSchema),
    defaultValues: {
      profileImage: undefined,
      name: "",
      activeArea: "",
      portfolioImage: undefined,
      portfolio: "",
    },
  });

  const onSubmit = (values: ArtistFormValues) => {
    if (phase === SignUpPhase.Basic) {
      setPhase(SignUpPhase.Portfolio);
      return;
    }
    console.log("Artist sign up:", values);
    // 실제 회원가입 로직은 여기에 구현

    router.replace("/signup/success/?from=" + UserRole.ARTIST);
  };

  return (
    <Form {...form}>
      <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
        <SwitchCase
          value={phase}
          caseBy={{
            [SignUpPhase.Basic]: (
              <div>
                <h1 className="font-semibold text-gray-950 text-[28px] whitespace-pre-line">{`아티스트 회원으로 가입하시나요?`}</h1>
                <p className="mt-3 font-medium text-base text-gray-600">
                  무브텀과 함께 일상을 바꾸는 창작을 시작해보세요.
                </p>
              </div>
            ),
            [SignUpPhase.Portfolio]: (
              <div>
                <h1 className="font-semibold text-gray-950 text-[28px] whitespace-pre-line">{`포트폴리오를 등록해주세요`}</h1>
                <p className="mt-3 font-medium text-base text-gray-600">
                  포트폴리오가 있으면 매칭 성사 확률이 높아져요!
                </p>
              </div>
            ),
          }}
        />

        <SwitchCase
          value={phase}
          caseBy={{
            [SignUpPhase.Basic]: (
              <BaseFormFields
                form={form}
                profilePreviewUrl={profilePreviewUrl}
                setProfilePreviewUrl={setProfilePreviewUrl}
              />
            ),
            [SignUpPhase.Portfolio]: (
              <PortfolioFields
                form={form}
                portfolioPreviewUrl={portfolioPreviewUrl}
                setPortfolioPreviewUrl={setPortfolioPreviewUrl}
              />
            ),
          }}
        />

        <div className="flex gap-5">
          <If condition={phase === SignUpPhase.Portfolio}>
            <Button
              type="submit"
              variant="outline"
              disabled={!form.formState.isValid}
              size="lg"
              className="w-[161px]"
            >
              나중에 등록할게요
            </Button>
          </If>
          <Button
            type="submit"
            variant="brand"
            disabled={!form.formState.isValid}
            size="lg"
            className="flex-1"
          >
            {phase === SignUpPhase.Basic ? "다음" : "완료"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

interface FieldsProps {
  form: UseFormReturn<ArtistFormValues>;
}

function BaseFormFields({
  form,
  profilePreviewUrl,
  setProfilePreviewUrl,
}: FieldsProps & {
  profilePreviewUrl: string;
  setProfilePreviewUrl: (url: string) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="space-y-5">
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
                <AvatarImage src={profilePreviewUrl} />
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
                    setProfilePreviewUrl(url);
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
              <span>닉네임</span>
              <span className="text-red-500 pl-0.5">*</span>
            </FormLabel>
            <FormControl>
              <Input
                placeholder="이름을 입력하세요"
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
        name="activeArea"
        render={({ field }) => (
          <FormItem>
            <FormLabel>활동 지역 *</FormLabel>
            <ActiveAreaSelect value={field.value} onChange={field.onChange} />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function PortfolioFields({
  form,
  portfolioPreviewUrl,
  setPortfolioPreviewUrl,
}: FieldsProps & {
  portfolioPreviewUrl: string;
  setPortfolioPreviewUrl: (url: string) => void;
}) {
  return (
    <div className="space-y-5">
      <FormField
        control={form.control}
        name="portfolioImage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>포트폴리오 대표 이미지</FormLabel>
            {portfolioPreviewUrl && (
              <div className="w-32 h-32 border rounded-lg overflow-hidden">
                <img
                  src={portfolioPreviewUrl}
                  alt="Portfolio preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <FormControl>
              <Input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="mt-1"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    field.onChange(file);
                    const url = URL.createObjectURL(file);
                    setPortfolioPreviewUrl(url);
                  }
                }}
              />
            </FormControl>
            <p className="text-sm text-gray-600">
              자신을 가장 잘 드러낼 수 있는 대표 작업물을 올려주세요. JPG, PNG,
              WebP 형식, 최대 5MB
            </p>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="portfolio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>포트폴리오 링크</FormLabel>
            <FormControl>
              <Input
                placeholder="포트폴리오 URL을 입력하세요"
                className="mt-1"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

interface ActiveAreaSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function ActiveAreaSelect({ value, onChange }: ActiveAreaSelectProps) {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <FormControl>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="활동 지역을 선택하세요" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {LOCATION_OPTIONS.map((option) => (
          <SelectItem key={option.code} value={option.code}>
            {option.description}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
