import { google } from 'googleapis';

// 구글 드라이브 접근을 위해 OAuth2 인증을 하는 함수
export const getGoogleAccessToken = async (googleDriveAPICredentials) => {
  // const credentials = JSON.parse(googleDriveAPICredentials);
  const credentials = JSON.parse(process.env.GOOGLE_DRIVE_API_CREDENTIALS);
  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.priavate_key,
    ['https://www.googleapis.com/auth/drive.file']
  );

  return auth;
};

// 구글 드라이브 접근 권한을 얻는 함수
export const getDriveAccess = (auth) => {
  return google.drive({ version: 'v3', auth });
};
