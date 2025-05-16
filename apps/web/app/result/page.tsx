import type { JSX } from 'react'; // ✅ Step 1: Import JSX type
import { Button } from '@repo/ui/button';

export default function Page(): JSX.Element { // ✅ Step 2: Add return type
  return (
    <div>
      <Button appName="test open plan assignment">Previous</Button>
    </div>
  );
}
