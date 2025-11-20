"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail, Lock, User, ArrowRight, AtSign, X, Check, Plus, Wand2, Loader2, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [selectedModel, setSelectedModel] = useState("auto");
  const [selectedContext, setSelectedContext] = useState<{ id: string; title: string }[]>([]);
  const [isEnhancingPrompt, setIsEnhancingPrompt] = useState(false);
  
  const chatSessions: { id: string; title: string }[] = [];

  // Refs untuk GSAP animations
  const leftContentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const oauthButtonsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const footerRef = useRef<HTMLParagraphElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignIn ? "Sign In" : "Sign Up", { email, password, name });
  };

  // Generate code block content for signup
  const generateCodeBlock = () => {
    if (!isSignIn) {
      const lines = [
        `const user = {`,
        `  name: "${name || "..."}",`,
        `  email: "${email || "..."}",`,
        `  password: "${"*".repeat(password.length || 0)}",`,
        `};`,
        ``,
        `await createAccount(user);`,
      ];
      return lines;
    }
    return [];
  };

  // Format input value for AIInputSection (signin mode)
  const getInputValue = () => {
    if (isSignIn) {
      let value = "";
      if (email) value += `Email: ${email}\n`;
      if (password) value += `Password: ${"*".repeat(password.length)}\n`;
      return value.trim();
    }
    return "";
  };

  const handleEnhancePrompt = async () => {
    if (isEnhancingPrompt) return;
    setIsEnhancingPrompt(true);
    setTimeout(() => {
      setIsEnhancingPrompt(false);
    }, 1000);
  };

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const animatePage = async () => {
      const gsap = (await import('gsap')).default;

      const ctx = gsap.context(() => {
        // Animate left side content (AIInputSection/Code Block)
        if (leftContentRef.current) {
          gsap.fromTo(
            leftContentRef.current,
            {
              opacity: 0,
              scale: 0.95,
              x: -50,
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              delay: 0.2,
            }
          );
        }

        // Animate logo
        if (logoRef.current) {
          gsap.fromTo(
            logoRef.current,
            {
              opacity: 0,
              scale: 0.8,
              y: -20,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
            }
          );
        }

        // Animate welcome message
        if (welcomeRef.current) {
          gsap.fromTo(
            welcomeRef.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.1,
            }
          );
        }

        // Animate OAuth buttons with stagger
        if (oauthButtonsRef.current) {
          const buttons = oauthButtonsRef.current.children;
          gsap.fromTo(
            Array.from(buttons),
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.1,
              delay: 0.3,
            }
          );
        }

        // Animate form fields with stagger
        if (formRef.current) {
          const fields = formRef.current.querySelectorAll('.space-y-2');
          gsap.fromTo(
            Array.from(fields),
            {
              opacity: 0,
              x: 30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.1,
              delay: 0.5,
            }
          );

          // Animate submit button
          const submitButton = formRef.current.querySelector('button[type="submit"]');
          if (submitButton) {
            gsap.fromTo(
              submitButton,
              {
                opacity: 0,
                y: 20,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.8,
              }
            );
          }
        }

        // Animate footer text
        if (footerRef.current) {
          gsap.fromTo(
            footerRef.current,
            {
              opacity: 0,
              y: 10,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              delay: 0.9,
            }
          );
        }
      });

      return () => ctx.revert();
    };

    animatePage();
  }, [isSignIn]); // Re-animate when switching between sign in/sign up

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - AIInputSection atau Code Block */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-background items-center justify-center p-12">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Multiple Orbs - Menumpuk di Bawah */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-[-50px] left-[100px] w-[350px] h-[350px] bg-primary/8 rounded-full blur-3xl animate-float-2" />
          <div className="absolute bottom-[-100px] left-[200px] w-[300px] h-[300px] bg-primary/12 rounded-full blur-3xl animate-float-3" />
          <div className="absolute bottom-[-150px] left-[300px] w-[400px] h-[400px] bg-primary/9 rounded-full blur-3xl animate-float-4" />
          <div className="absolute bottom-[-80px] left-[50px] w-[320px] h-[320px] bg-primary/11 rounded-full blur-3xl animate-float-5" />
          <div className="absolute bottom-[-120px] left-[150px] w-[380px] h-[380px] bg-primary/7 rounded-full blur-3xl animate-float-6" />
          <div className="absolute bottom-[-200px] left-[250px] w-[360px] h-[360px] bg-primary/10 rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-[-60px] left-[350px] w-[340px] h-[340px] bg-primary/8 rounded-full blur-3xl animate-float-2" />
          <div className="absolute bottom-[-180px] left-[100px] w-[280px] h-[280px] bg-primary/9 rounded-full blur-3xl animate-float-3" />
          <div className="absolute bottom-[-140px] left-[400px] w-[300px] h-[300px] bg-primary/11 rounded-full blur-3xl animate-float-4" />
          <div className="absolute bottom-[-220px] left-[180px] w-[320px] h-[320px] bg-primary/8 rounded-full blur-3xl animate-float-5" />
        </div>

        {/* Content - AIInputSection untuk Sign In, Code Block untuk Sign Up */}
        <div ref={leftContentRef} className="relative z-10 w-full max-w-2xl">
          {isSignIn ? (
            // AIInputSection untuk Sign In
            <div className="relative flex w-full justify-center items-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-white/8 blur-3xl rounded-full pointer-events-none animate-float-1" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full bg-white/6 blur-3xl rounded-full pointer-events-none animate-float-2" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-white/6 blur-3xl rounded-full pointer-events-none animate-float-3" />

              <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden border border-border/50 bg-background/40 backdrop-blur-xl">
                <InputGroup className="rounded-xl border-0 bg-transparent">
                  <InputGroupAddon align="block-start">
                    <div className="flex items-center gap-2 flex-wrap">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <InputGroupButton
                            type="button"
                            variant="outline"
                            className="cursor-pointer inline-flex items-center gap-1 rounded-full px-2 py-1 h-7 text-xs"
                          >
                            <AtSign className="h-4 w-4" />
                            {selectedContext.length === 0 && (
                              <span>Add context</span>
                            )}
                          </InputGroupButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="bottom" align="start" className="[--radius:0.95rem]">
                          {chatSessions.length === 0 && (
                            <DropdownMenuItem disabled>No history</DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {selectedContext.map((c) => (
                        <span
                          key={c.id}
                          className="text-sm px-3 py-1.5 rounded-full bg-muted text-primary cursor-pointer inline-flex items-center"
                          onClick={() => setSelectedContext((prev) => prev.filter((p) => p.id !== c.id))}
                        >
                          {c.title}
                          <button className="ml-2 inline-flex items-center justify-center" aria-label="remove">
                            <X className="h-4 w-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </InputGroupAddon>
                  <InputGroupTextarea
                    placeholder="Describe what you want to create or accomplish..."
                    value={getInputValue()}
                    readOnly
                    className="max-h-[12rem] resize-none rounded-xl min-h-[5rem] text-base placeholder:text-muted-foreground/60"
                  />
                  <InputGroupAddon align="block-end" className="flex items-center justify-between w-full gap-2">
                    <div className="flex items-center gap-2">
                      <InputGroupButton
                        type="button"
                        variant="outline"
                        className="rounded-full"
                        size="icon-xs"
                      >
                        <Plus className="h-4 w-4" />
                      </InputGroupButton>
                      <InputGroupButton
                        type="button"
                        variant="outline"
                        className="rounded-full"
                        size="icon-xs"
                        onClick={handleEnhancePrompt}
                        disabled={isEnhancingPrompt || !getInputValue()}
                        title="Enhance prompt"
                      >
                        {isEnhancingPrompt ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Wand2 className="h-4 w-4" />
                        )}
                      </InputGroupButton>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select value={selectedModel} onValueChange={setSelectedModel}>
                        <SelectTrigger className="h-8 w-fit text-xs border-0 bg-transparent shadow-none hover:bg-accent/50 rounded-full px-2 focus:ring-0 focus:ring-offset-0">
                          <SelectValue placeholder="Auto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto</SelectItem>
                          <SelectItem value="gpt-4">GPT-4</SelectItem>
                          <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
                          <SelectItem value="claude">Claude</SelectItem>
                          <SelectItem value="gemini">Gemini</SelectItem>
                        </SelectContent>
                      </Select>
                      <Separator orientation="vertical" className="h-4 bg-border/60" />
                      <InputGroupButton
                        type="button"
                        variant="default"
                        className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                        size="icon-xs"
                        disabled={!getInputValue()}
                      >
                        <ArrowUp className="h-4 w-4" />
                      </InputGroupButton>
                    </div>
                  </InputGroupAddon>
                </InputGroup>
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          ) : (
            // Code Block untuk Sign Up - Glassmorphism
            <div className="relative w-full rounded-xl border border-border/30 bg-background/20 backdrop-blur-2xl overflow-hidden shadow-2xl">
              <div className="p-6 font-mono text-sm">
                <div className="flex">
                  <div className="select-none text-right pr-4 text-muted-foreground/40 border-r border-border/20">
                    {generateCodeBlock().map((_, i) => (
                      <div key={i} className="leading-7">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="pl-4 flex-1">
                    <pre className="text-white/90 leading-7">
                      <code>
                        {generateCodeBlock().map((line, i) => (
                          <div key={i} className={cn(
                            line === "" && "h-7"
                          )}>
                            {line || " "}
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col bg-background p-8 lg:p-12">
        <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">
          {/* Logo dan Welcome Message - Pojok Kiri Atas */}
          <div className="mb-8">
            <div ref={logoRef} className="flex items-center space-x-2 mb-6">
              <img
                src="/logo.svg"
                alt="Luminite AI Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">
                Luminite
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                AI
              </span>
            </div>
            <div ref={welcomeRef}>
              <h1 className="text-3xl font-bold text-white mb-2">
                {isSignIn ? "Welcome back" : "Get started"}
              </h1>
              <p className="text-muted-foreground">
                {isSignIn
                  ? "Sign in to continue to your AI-powered productivity workspace."
                  : "Create your account and start transforming your productivity with AI."}
              </p>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div ref={oauthButtonsRef} className="space-y-3 mb-6">
            <Button
              type="button"
              variant="outline"
              className="w-full justify-center gap-2 h-11"
              onClick={() => {
                console.log("GitHub OAuth");
              }}
            >
              <Github className="w-5 h-5" />
              Continue with GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full justify-center gap-2 h-11"
              onClick={() => {
                console.log("Google OAuth");
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {!isSignIn && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    required={!isSignIn}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {isSignIn && (
              <div className="flex items-center justify-end text-sm">
                <a
                  href="#forgot"
                  className="text-primary hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Forgot password");
                  }}
                >
                  Forgot password?
                </a>
              </div>
            )}

            {!isSignIn && (
              <div className="text-sm text-muted-foreground">
                By creating an account, you agree to our{" "}
                <a href="#terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </div>
            )}

            <Button type="submit" className="w-full h-11" size="lg">
              {isSignIn ? "Sign In" : "Create Account"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Footer Text */}
          <p ref={footerRef} className="mt-6 text-center text-sm text-muted-foreground">
            {isSignIn ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignIn(false)}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignIn(true)}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
