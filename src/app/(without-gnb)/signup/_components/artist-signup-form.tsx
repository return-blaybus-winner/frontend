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
import { useState } from "react";
import SwitchCase from "@/components/utils/switch-case";
import If from "@/components/utils/if";
import { useRouter } from "next/navigation";
import { UserRole } from "@/app/_models/user";

enum SignUpPhase {
  Basic = "basic",
  Portfolio = "portfolio",
}

export function ArtistSignUpForm() {
  const router = useRouter();

  const [phase, setPhase] = useState<SignUpPhase>(SignUpPhase.Basic);

  const form = useForm<ArtistFormValues>({
    resolver: zodResolver(artistSchema),
    defaultValues: {
      profileImage: "",
      name: "",
      activeArea: "",
      portfolioImage: "",
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

    router.replace("/signup/success/?from=" + UserRole.Artist);
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
            [SignUpPhase.Basic]: <BaseFormFields form={form} />,
            [SignUpPhase.Portfolio]: <PortfolioFields form={form} />,
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

function BaseFormFields({ form }: FieldsProps) {
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
            </FormLabel>
            {field.value && (
              <Avatar className="size-[60px]">
                <AvatarImage src={field.value} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            )}
            <FormControl>
              <Input
                placeholder="프로필 이미지 URL을 입력하세요"
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

function PortfolioFields({ form }: FieldsProps) {
  return (
    <div className="space-y-5">
      <FormField
        control={form.control}
        name="portfolioImage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>포트폴리오 대표 이미지</FormLabel>
            <FormControl>
              <Input
                placeholder="포트폴리오 이미지 URL을 입력하세요"
                className="mt-1"
                {...field}
              />
            </FormControl>
            <p className="text-sm text-gray-600">
              자신을 가장 잘 드러낼 수 있는 대표 작업물을 올려주세요.
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
        <SelectItem value="seoul">서울</SelectItem>
        <SelectItem value="gyeonggi">경기</SelectItem>
        <SelectItem value="incheon">인천</SelectItem>
        <SelectItem value="busan">부산</SelectItem>
        <SelectItem value="daegu">대구</SelectItem>
        <SelectItem value="daejeon">대전</SelectItem>
        <SelectItem value="gwangju">광주</SelectItem>
        <SelectItem value="ulsan">울산</SelectItem>
        <SelectItem value="sejong">세종</SelectItem>
        <SelectItem value="gangwon">강원</SelectItem>
        <SelectItem value="chungbuk">충북</SelectItem>
        <SelectItem value="chungnam">충남</SelectItem>
        <SelectItem value="jeonbuk">전북</SelectItem>
        <SelectItem value="jeonnam">전남</SelectItem>
        <SelectItem value="gyeongbuk">경북</SelectItem>
        <SelectItem value="gyeongnam">경남</SelectItem>
        <SelectItem value="jeju">제주</SelectItem>
      </SelectContent>
    </Select>
  );
}
