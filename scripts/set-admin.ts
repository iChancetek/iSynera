
// scripts/set-admin.ts
import { adminAuth } from '../src/lib/firebase-admin';

async function setAdmin(email: string) {
  try {
    // Get user by email
    const user = await adminAuth.getUserByEmail(email);
    
    // Set custom claims
    await adminAuth.setCustomUserClaims(user.uid, { admin: true });
    
    console.log(`✅ Successfully set admin claim for ${email}`);
    console.log(`User ID: ${user.uid}`);
    
    // Verify the claims were set
    const updatedUser = await adminAuth.getUser(user.uid);
    console.log('Custom claims:', updatedUser.customClaims);
    
  } catch (error) {
    console.error('❌ Error setting admin claim:', error);
    process.exit(1);
  }
}

// Get email from command line argument
const email = process.argv[2];

if (!email) {
  console.error('❌ Please provide an email address');
  console.log('Usage: npx tsx scripts/set-admin.ts user@example.com');
  process.exit(1);
}

setAdmin(email).then(() => {
  console.log('✅ Done!');
  process.exit(0);
});
