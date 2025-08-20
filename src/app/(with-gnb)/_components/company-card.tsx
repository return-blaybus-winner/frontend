import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function CompanyCard() {
  return (
    <Card className="">
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">Studio JKO</CardTitle>
            <div className="flex gap-4 text-sm text-gray-600 mb-2">
              <span>총 사업예산: 45억</span>
              <span>총 수주건: 50건</span>
            </div>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>총 고용: 50건</span>
              <span>현재: 7건</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
