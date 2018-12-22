package pack1;

import org.testng.annotations.Test;

public class TestNGClass {

	
	@Test(invocationCount = 4, threadPoolSize = 2)
	public void one()
	{
		try {
		System.out.println("TestNG Executed");
		Thread.sleep(2000);
		System.out.println("TestNG Executed 1");
		}catch(Exception e) {
			
		}
	}
}
