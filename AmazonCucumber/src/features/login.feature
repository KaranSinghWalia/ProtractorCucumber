Feature: As a user i should be able to login into the application

    Scenario: As a user I am able to login into the application with my credentials

        Given URL of the application should be open.
        When The user navigates to the login page.
        Then The user enter's his/her credentials username - "1234567" and Password - "Random"
        And The user should be logged in.




    Scenario Outline: As a user I am not able to login into the application with my credentails

        Given URL of the application should be open.
        When The user navigates to the login page.
        Then The user enter's his/her credentials username - "Name" and Password - "Password"
        And The user should not be logged in.

        Examples:
           #| Name  | Password |
            | John  | Random   |
            | Smith | Rondom1  |
            | Alex  | Tandom2  |