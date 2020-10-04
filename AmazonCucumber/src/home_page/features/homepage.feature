Feature: Searching an item using search bar in amazon

    Scenario: Searching an item which is present

        Given The url of the application is opened
        When The user is logged in with his/her credenitals "Karanbir" and "random"
        Then The user searches for an item
            | Item   | Brand   |
            | Shoes  | Nike    |
            | Shirts | US Polo |
        Then The user logges out


    Scenario: Searching an item which is not present

        Given The url of the application is opened
        When The user is logged in with his/her credenitals "Karanbir" and "random"
        Then The user searches for an item
            | Item   | Brand   |
            | Shoes  | Nike    |
            | Shirts | US Polo |
        Then An alert should be poped up