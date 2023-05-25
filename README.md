I didn´t have enough time to complete the full scenario. 
Also I have created an account and it says that the account was suspended.
However, this is what I would do...
Have test data to test different login users. Happy path -> user is able to login successfully and see the dashboard.
Negative test cases -> I would test for users that are not able to login. I would assert in the errors to see expected outcome.
I can try with other two different users one with incorrect username and another with incorrect password.
Also I could add test cases for case which account has been suspended. AS the error I got.
Corner cases: Try login with strange characters, different languages, chinese, arabic, etc and see how the system behaves.
