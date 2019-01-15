package code;

import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.SimpleEmail;

public class code2 {

	
	public static void main(String[] args)
	{
		try {
		Email m = new SimpleEmail();
		m.setHostName("smtp.gmail.com");
		m.setSmtpPort(465);
		m.setSSLOnConnect(true);
		m.setAuthenticator(new DefaultAuthenticator("aquariusnawab@gmail.com", "Nasz@183"));
		m.setFrom("aquariusnawab@gmail.com");
		m.addTo("aquariusnawab18@gmail.com");
		m.setMsg("java mail");
		m.send();
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
