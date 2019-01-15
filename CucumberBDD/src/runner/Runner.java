package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="FeatureFiles", glue= {"code"}, plugin = { "pretty", "html:target/cucumber-reports" })

public class Runner {

	
	
}
