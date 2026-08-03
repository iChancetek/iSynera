// This script must be run in a secure backend environment (like your local machine)
// with the Firebase Admin SDK. DO NOT run this in your browser or include it in your frontend code.

const admin = require('firebase-admin');
const path = require('path');

// --- IMPORTANT ---
// 1. Make sure you have run 'npm install firebase-admin' in this directory.
// 2. Make sure the 'serviceAccountKey.json' file is in the same directory as this script.
const serviceAccount = require(path.join(__dirname, 'serviceAccountKey.json'));

// --- USER TO BE MADE ADMIN ---
const userEmail = 'chancellor@ichancetek.com';

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

/**
 * Sets an 'admin: true' custom claim on the user account specified by userEmail.
 */
async function setAdminClaim() {
  try {
    console.log(`Fetching user data for ${userEmail}...`);
    const user = await admin.auth().getUserByEmail(userEmail);

    console.log(`Setting custom claim for user UID: ${user.uid}`);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });

    console.log(`\n✅ Success! The user '${userEmail}' has been granted admin privileges.`);
    console.log("They will need to log out and log back in for the changes to take effect.");

  } catch (error) {
    console.error('\n❌ Error setting admin claim:');
    if (error.code === 'auth/user-not-found') {
      console.error(`   The user '${userEmail}' does not exist in Firebase Authentication.`);
      console.error('   Please ensure the user has signed up for an account first.');
    } else {
      console.error('   ' + error.message);
    }
  }
}

setAdminClaim();
