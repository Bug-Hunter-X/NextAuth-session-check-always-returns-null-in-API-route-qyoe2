```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './api/auth/[...nextauth]'; // Path adjusted

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // ... rest of your API route handler, accessing session.user...
  res.json({message: 'Success!', user: session.user})
}
```