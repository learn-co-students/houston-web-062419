# Building out a many-to-many relationship

1. Write all of the "initialize" methods (first for the "many" classes, then for the "belongs to" class), as well as attr_macros

2. Create some test data (making sure to pass in INSTANCES into the "belongs to"/"join" class) and make sure things work

3. Create the @@all class variable, shovel all new instances into the @@all array, and create a getting class method

4. Test code

5. From the "many" classes, create a method to get all of the "join" instances that belong to that instance

6. Test code

7. From the "many" classes, create a method to get all of the other "many" instances that belong to that instance

8. Test code

## customer
- customer#name and customer#number should work

- Customer.all should return all customer instances

- customer#accounts should return all account that belong to the customer

- customer#banks should return all banks that are associated with the customer

- customer#balance should return total balance from all the accounts from all the bank that are associated with the customer

## bank

- bank#name should work

- Bank.all should return all bank instances

- bank#accounts should return all account that belong to the bank

- bank#customers should return all of the Customers that are associated with the bank

## account

- account#customer, account#bank and account#balance should work

- Account.all should return all account instances
