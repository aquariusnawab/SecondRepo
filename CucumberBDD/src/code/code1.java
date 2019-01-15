package code;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class code1 {

	@When("^Enter username$")
	public void enter_username() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Enter Username");
	    
	}

	@When("^Enter Password$")
	public void enter_Password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Enter Password");
		
	}

	@Then("^Click Login$")
	public void click_Login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Click Login");
		
	}

	@Then("^Home Page display$")
	public void home_Page_display() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Home Page display");
		
	}
	
	@Then("^Click Logout$")
	public void click_Logout() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Click Logout");
	}

	@Then("^\"([^\"]*)\" Page display$")
	public void page_display(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(arg1);
	}
}
