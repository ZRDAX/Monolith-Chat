import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[300px] lg:grid-cols-2 xl:min-h-[300px]">
      
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/glovo.png"
          width="300"
          height="300"
          className="h-full w-full object-cover bg-accent-bege"
        />
      </div>
      
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">MONOLITCH</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="user">User</Label>
              <Input
                id="user"
                type=""
                placeholder="nickname"
                required
              />
            </div>
            <Link href="/Tema">
              <Button type="submit" className="w-full bg-accent-bege">
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
