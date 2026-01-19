import React from 'react';
import { Badge } from '@/components/ui/Badge';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Login - ETERNATUM',
  description: 'Log in to your ETERNATUM account',
};

export default function LoginPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="success" className="justify-center w-full">
          AUTHENTICATION GATEWAY
        </Badge>

        <h1 className="font-pixel text-4xl md:text-5xl font-bold text-neon-cyan text-glow-cyan tracking-widest">
          WELCOME BACK
        </h1>

        <p className="text-gray-400">
          Enter your credentials to access your ETERNATUM account
        </p>
      </div>

      {/* Form Card */}
      <div className="border border-neon-cyan/30 rounded-lg p-8 bg-surface/50 backdrop-blur-sm">
        <LoginForm />
      </div>

      {/* Footer Info */}
      <div className="text-center text-xs text-gray-600 space-y-2">
        <p>© 2024 ETERNATUM. All rights reserved.</p>
        <p className="font-pixel">SECURE CONNECTION ESTABLISHED</p>
      </div>
    </div>
  );
}
