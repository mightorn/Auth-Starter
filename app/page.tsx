'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [showDeveloper, setShowDeveloper] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md mx-auto p-6 border border-border rounded-lg bg-card">
        <h2 className="text-2xl font-bold mb-4 text-center">Who developed this?</h2>
        
        <div className="flex justify-center mb-4">
          <Button 
            onClick={() => setShowDeveloper(!showDeveloper)}
            variant="default"
          >
            Show me
          </Button>
        </div>
        
        {showDeveloper && (
          <div className="mt-4 p-4 bg-secondary rounded-md text-center">
            <p className="text-xl font-semibold">Mightorn</p>
          </div>
        )}
      </div>
    </main>
  );
}
