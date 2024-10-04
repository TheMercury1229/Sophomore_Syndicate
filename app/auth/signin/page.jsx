import React from "react";
import { Card, CardHeader } from "@/components/ui/Card"; // Import Card component
import { Button } from "@/components/ui/Button"; // Adjust import paths accordingly
import { Input } from "@/components/ui/Input"; // Adjust import paths accordingly
import { Label } from "@/components/ui/Label"; // Adjust import paths accordingly
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex items-center w-full justify-center p-2">
      <Card className="p-4 max-w-md w-full   shadow-md">
        <CardHeader>
          <h2 className="text-3xl font-bold text-center">Sign In</h2>
        </CardHeader>
        <form>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="text-center mt-4 text-muted-foreground">
          Do not have an account?{" "}
          <Link
            href="/auth/signup"
            className="hover:underline hover:text-primary"
          >
            Sign Up
          </Link>{" "}
        </p>
      </Card>
    </div>
  );
}
