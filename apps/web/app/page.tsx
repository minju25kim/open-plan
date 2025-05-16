import type { JSX } from 'react'; // ✅ Step 1: Import JSX type
import { Button } from '@repo/ui/button';

export default function Home(): JSX.Element { // ✅ Step 2: Add return type
  return (
    <div>
      <h1>Minu Kim</h1>
      <Button appName="test open plan assignment">Next</Button>
    </div>
  );
}
