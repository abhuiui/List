function About ()
{
    return(
        <div>
            <h2>How is CRUD performed in a database?</h2>
In RDBMS, CRUD operations are performed through Structure Query Language (SQL) commands.

The INSERT statement is used for CREATE:
INSERT INTO name VALUES (field value 1, field value, 2…)
The SELECT statement is used for READ:
SELECT field 1, field 2, …FROM name
The UPDATE statement is used for UPDATE:
UPDATE  name SET field1=value1, field2=value2,… 
CRUD operations in NoSQL databases will depend on the language of the specific database platform. For example, the Cassandra CQL looks very similar to SQL. In MongoDB, on the other hand, the operations are performed with built-in functions:

CREATE is performed throughdb.collection.insertOne()or db.collection.insertMany(). The first one adds one document, and the latter adds many documents to a database collection.
READ is performed through db.collection.find() or db.collection.findOne().
UPDATE is performed through db.collection.updateOne(), db.collection.updateMany() , or db.collection.replaceOne().
DELETE is performed through db.collection.deleteOne() or db.collection.deleteMany().
Database developers or DBAs often run CRUD statements manually against the database from a client tool. However, in most production use cases, these statements are embedded within the  programming language code. When the program runs, the API for the target database takes the CRUD statement and translates it into the native language of the database.

For example, when an ecommerce site visitor initiates the user registration process, a microservice written in Python or Java may read the input values (such as first name, last name, email, address, and so on), and dynamically build an Oracle PL/SQL command. This statement is then sent to the Oracle driver library, which runs it against the database.

Examples of CRUD Operations
Let’s take the ecommerce store example further.

When the user CREATEs a client record, she can READ inventory by browsing through the product catalog.
When she places an order, the backend system UPDATEs the inventory temporarily to reflect the reduced number of items available.
When she purchases the item, the UPDATE becomes permanent, and other users READing the number of items available can see the change. Meanwhile, another process CREATEs a record in the shipping company’s database, notifying them of the dispatch request.
If the user removes an item from the shopping cart, then a temporary record added to the “sales” table is DELETEd.
In an online travel agency, a user can CREATE a booking request, READ available flights for the requested route, and make a purchase. This will UPDATE a list of available seats for the flight and CREATE multiple records in the “itinerary” table. If the user terminates the session halfway, then all rows related to this transaction are DELETEd.

Testing CRUD Operations
Software operations involving CRUD are usually black-box tested. When the testers perform certain operations, they check the backend database rather than analyzing the code to see if the intended changes were made or the correct data returned. Such testing aims to validate each CRUD operation resulting from various possible user interactions in different scenarios.

        </div>
    )
}
export default About;