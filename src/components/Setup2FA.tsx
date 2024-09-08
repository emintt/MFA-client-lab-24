import { Button } from './ui/button';

const Setup2FA = (props: { qrCodeUrl: string; switchForm: () => void }) => {
  const {qrCodeUrl, switchForm} = props;
  return (
    <div className="p-4">
      {
        // add image element with qrCodeUrl as src and a Button with switchForm function
      }
        <img onClick={switchForm} src={qrCodeUrl} alt="Authenticator QR Code" />
        <Button>Press here when the QR code is scanned</Button>
    </div>
  );
};

export default Setup2FA;
