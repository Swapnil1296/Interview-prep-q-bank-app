export const postgreSql = [
    {
        "id": ":r1:01",
        "topic": "postgresql",
        "question": " What is PostgreSQL?\r",
        "answer": " PostgreSQL is an advanced, open-source relational database management system (RDBMS) known for its stability, extensibility, and adherence to SQL standards. It supports complex queries, transactions, and data integrity while allowing you to define custom data types, operators, and functions. PostgreSQL’s architecture is built around the concept of Multi-Version Concurrency Control (MVCC), which means that it provides high levels of concurrency and performance without heavy locking.\n Additional Details:\n-Extensibility: Users can create custom functions in various languages (PL/pgSQL, PL/Python, etc.).\n-ACID Compliance: Ensures that transactions are processed reliably.\n-Community and Ecosystem: A robust ecosystem with many third-party tools, extensions (like PostGIS for geospatial data), and active community support.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": ":r1:11",
        "topic": "postgresql",
        "question": "How do you connect to PostgreSQL using psql?\r",
        "answer": " The psql command-line tool is the most common method to interact with a PostgreSQL database.\n \n\nDetailed Explanation:\n-Host (-h): Specifies the server address. Use localhost for local connections or an IP/hostname for remote servers.\n-User (-U): Specifies the PostgreSQL user to log in as. The default superuser is usually named postgres.\n-Database (-d): Indicates the database you wish to connect to.\n-Interactive Shell: Once connected, you can execute SQL commands, use meta-commands (starting with a backslash), and navigate your database environment.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\npsql -h localhost -U postgres -d mydatabase"
    },
    {
        "id": ":r1:21",
        "topic": "postgresql",
        "question": "What are the common data types in PostgreSQL?\r",
        "answer": " PostgreSQL supports a broad range of data types to cater to various use cases.\n Examples and Explanation:\n1.Numeric Types:\n-INTEGER, BIGINT, SMALLINT: Used for whole numbers.\n-NUMERIC, DECIMAL: Ideal for exact numeric values with a defined precision (useful in financial calculations).\n2.Character Types:\n-CHAR, VARCHAR: Fixed and variable length strings.\n-TEXT: For large, variable-length strings without a defined limit.\n3.Date/Time Types:\n-DATE, TIME, TIMESTAMP: For storing dates, times, and combined date/time values.\n-INTERVAL: For representing durations.\n4.Boolean:\n-BOOLEAN: Stores TRUE, FALSE, or NULL.\n5.Advanced Types:\n-ARRAY: Supports multi-dimensional arrays.\n-JSON and JSONB: For storing JSON data (with JSONB being binary and optimized for indexing).\n-UUID: For universally unique identifiers.\n ",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Table Example:\r\nCREATE TABLE employees (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL,\r\n    salary NUMERIC(10,2),\r\n    join_date DATE,\r\n    skills TEXT[],\r\n    profile JSONB,\r\n    is_active BOOLEAN DEFAULT true\r\n);\r\n\r\nThis example illustrates the use of multiple data types in one table.\r"
    },
    {
        "id": ":r1:31",
        "topic": "postgresql",
        "question": "How do you create a database in PostgreSQL?",
        "answer": " You can create a database using SQL commands directly within psql or via the command line.\n \n\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Examples:\n SQL Command:\nCREATE DATABASE company_db;\n\nCommand Line:\ncreatedb company_db\n\nDetailed Explanation:\nOwnership and Encoding: You can specify an owner and encoding for the database:\n CREATE DATABASE company_db\nWITH OWNER = myuser\n     ENCODING = 'UTF8'\n     LC_COLLATE = 'en_US.UTF-8'\n     LC_CTYPE = 'en_US.UTF-8';\n\nUsage: Creating separate databases helps isolate data and manage permissions effectively."
    },
    {
        "id": ":r1:41",
        "topic": "postgresql",
        "question": "How do you create tables in PostgreSQL?",
        "answer": " Tables are created using the CREATE TABLE statement with a detailed specification of columns, data types, and constraints.\n\n\n\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example:\nCREATE TABLE departments (\n    dept_id SERIAL PRIMARY KEY,\n    dept_name VARCHAR(50) NOT NULL,\n    location VARCHAR(100)\n);\nIn-Depth Details:\nSERIAL: Automatically increments integers (often used for primary keys).\nConstraints: Define data integrity rules such as NOT NULL and PRIMARY KEY.\nExtensibility: You can add table-level constraints (like unique constraints) and even default values."
    },
    {
        "id": ":r1:51",
        "topic": "postgresql",
        "question": "What are constraints in PostgreSQL?",
        "answer": "Constraints are rules applied to table columns to enforce data integrity and consistency.\n \n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Examples and Details:\nPRIMARY KEY: Uniquely identifies each row.\n customer_id SERIAL PRIMARY KEY\n\n\nFOREIGN KEY: Ensures that a value in one table corresponds to a value in another.\n customer_id INTEGER REFERENCES customers(customer_id)\n\n\nUNIQUE: Prevents duplicate values.\n email VARCHAR(100) UNIQUE\n\n\nCHECK: Enforces domain integrity by limiting the values that can be placed in a column.\n CHECK (salary > 0)\n\n\nNOT NULL: Ensures that a column cannot have a NULL value.\n name VARCHAR(100) NOT NULL\n\n\nConstraints help prevent invalid data from being inserted, ensuring the reliability of your database."
    },
    {
        "id": ":r1:61",
        "topic": "postgresql",
        "question": "What is a primary key in PostgreSQL?\r",
        "answer": " A primary key is a special column (or a combination of columns) that uniquely identifies each row in a table. It cannot contain NULL values.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example:\nCREATE TABLE customers (\n    customer_id SERIAL PRIMARY KEY,\n    customer_name VARCHAR(100) NOT NULL\n);\n\nExtended Details:\nUniqueness: PostgreSQL automatically creates a unique index on primary key columns to speed up searches.\nBest Practices: Always designate a primary key to help enforce data integrity and optimize performance."
    },
    {
        "id": ":r1:71",
        "topic": "postgresql",
        "question": "How do you insert data into PostgreSQL?\r",
        "answer": " Data is added using the INSERT statement. You can insert single or multiple rows, and even return values from the inserted row(s).\r\n \r\nBatch Inserts: You can insert multiple rows in one command for efficiency.\r\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\nINSERT INTO employees (name, salary, join_date, is_active)\r\nVALUES ('John Doe', 75000.00, '2023-03-01', true);\r\n\r\nMore Details:\r\nReturning Clause: Retrieve auto-generated values (like serial IDs).\r\n INSERT INTO employees (name, salary)\r\nVALUES ('Jane Doe', 82000.00)\r\nRETURNING id;\r\n\r"
    },
    {
        "id": ":r1:81",
        "topic": "postgresql",
        "question": "How do you update data in PostgreSQL?\r",
        "answer": "The UPDATE statement is used to modify existing data. It’s crucial to use a WHERE clause to prevent updating every row in the table.\n\n\n\nTransaction Safety: It’s often used within transactions to ensure atomicity.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example:\r\nUPDATE employees\r\nSET salary = 80000.00\r\nWHERE name = 'John Doe';\r\n\r\nDetailed Explanation:\r\nConditional Updates: Use WHERE to target specific rows.\r\nReturning Clause: Optionally, return the updated rows.\r\n UPDATE employees\r\nSET salary = 80000.00\r\nWHERE name = 'John Doe'\r\nRETURNING ;"
    },
    {
        "id": ":r1:91",
        "topic": "postgresql",
        "question": "How do you delete data in PostgreSQL?\r",
        "answer": " Data is removed with the DELETE statement, again using a WHERE clause to specify which records to delete.\n \n\nAdditional Details:\n-Cascading Deletes: If foreign keys are set with ON DELETE CASCADE, deleting a parent record can automatically delete related child records.\n-Transaction Use: Often, DELETE commands are wrapped in transactions to allow rollback if necessary.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\nDELETE FROM employees\r\nWHERE name = 'John Doe';"
    },
    {
        "id": ":r1:101",
        "topic": "postgresql",
        "question": " How do you use SELECT queries in PostgreSQL?\r",
        "answer": " The SELECT statement retrieves data from one or more tables. You can filter, sort, group, and join data as needed.\r\n \r\n\r\n\r\nSubqueries: Nest SELECT statements for complex queries.\r\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\nSELECT name, salary\r\nFROM employees\r\nWHERE is_active = true\r\nORDER BY salary DESC;\r\n\r\nIn-Depth Details:\r\nFiltering: Use WHERE for conditional selection.\r\nSorting: ORDER BY sorts the result set.\r\nAggregations: Use functions like COUNT, SUM, AVG along with GROUP BY to summarize data.\r\n SELECT dept_id, AVG(salary) AS avg_salary\r\nFROM employees\r\nGROUP BY dept_id;"
    },
    {
        "id": ":r1:111",
        "topic": "postgresql",
        "question": "What are joins in PostgreSQL?",
        "answer": " Joins combine rows from two or more tables based on related columns.\n \n\n\n\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example Types:\n1.LEFT JOIN: Returns all rows from the left table and matched rows from the right table.\n SELECT e.name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.dept_id;\n\n\n2.RIGHT JOIN: The opposite of LEFT JOIN.\n3.FULL OUTER JOIN: Returns rows when there is a match in one of the tables. Additional Details:\n-Join Conditions: Can involve multiple columns or complex expressions.\n-Self-Joins: Joining a table to itself to compare rows within the same table.\n4.INNER JOIN: Returns only rows with matching values in both tables.\n SELECT e.name, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.dept_id;"
    },
    {
        "id": ":r1:121",
        "topic": "postgresql",
        "question": "How do you create indexes in PostgreSQL?",
        "answer": " Indexes are used to speed up data retrieval. PostgreSQL supports various index types for different use cases.\n \n\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\nCREATE INDEX idx_employee_name ON employees(name);"
    },
    {
        "id": ":r1:131",
        "topic": "postgresql",
        "question": "What are advanced indexing types in PostgreSQL?\r",
        "answer": " PostgreSQL supports advanced indexing options for specific data types and query patterns.\n \n1.GiST (Generalized Search Tree):\n-Often used for geometric data types and range searches.\n2.BRIN (Block Range INdex):\n-Efficient for very large tables where the indexed values are naturally sorted.\n-Lower storage overhead compared to B-tree indexes.\n\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Examples and Details:\nGIN (Generalized Inverted Index):\nIdeal for indexing array values, full-text search, and JSONB data.\nCREATE INDEX idx_document_gin ON articles USING gin(document);\n\nMore Details:\nUnique Indexes: Enforce uniqueness.\n CREATE UNIQUE INDEX idx_unique_email ON employees(email);\n\n\nExpression Indexes: Create indexes on expressions.\n CREATE INDEX idx_lower_name ON employees(LOWER(name));\n\n\nPartial Indexes: Index only a subset of rows.\n CREATE INDEX idx_active_employees ON employees(name) WHERE is_active;\n"
    },
    {
        "id": ":r1:141",
        "topic": "postgresql",
        "question": "What are views in PostgreSQL?\n",
        "answer": "\n Views are virtual tables based on a SELECT query. They simplify complex queries and can help enforce security by exposing only selected data.\n \nDetailed Explanation:\n-Simplicity: Encapsulate complex joins and aggregations into a single virtual table.\n-Security: Limit user access to specific columns or rows.\n-Updatability: Some views can be made updatable using rules or triggers.\n\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\nCREATE VIEW active_employees AS\nSELECT name, salary\nFROM employees\nWHERE is_active = true;"
    },
    {
        "id": ":r1:151",
        "topic": "postgresql",
        "question": "What are materialized views in PostgreSQL?\n",
        "answer": " Materialized views store the results of a query physically on disk. They provide faster query performance at the cost of needing periodic refreshes when underlying data changes.\n \n\n\nMore Details:\n-Use Cases: Best for expensive queries that don’t require real-time data.\n-Maintenance: Schedule periodic refreshes during off-peak hours.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\nCREATE MATERIALIZED VIEW sales_summary AS\nSELECT date_trunc('day', order_date) AS day, sum(total) AS total_sales\nFROM orders\nGROUP BY day;\n\nTo update the view:\nREFRESH MATERIALIZED VIEW sales_summary;\n"
    },
    {
        "id": ":r1:161",
        "topic": "postgresql",
        "question": "What is a sequence in PostgreSQL?\r",
        "answer": " Sequences are special database objects that generate a sequence of numeric values, commonly used for auto-incrementing primary keys.\nAdditional Details:\n-Usage: The nextval() function retrieves the next value in the sequence.\n-Customizability: You can set minimum, maximum, and cyclic behavior.\n-Concurrency: Designed to be safe for use by multiple transactions concurrently.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example:\r\nCREATE SEQUENCE order_seq\r\n  START 1\r\n  INCREMENT 1;\r\n  \r\nCREATE TABLE orders (\r\n    order_id INTEGER DEFAULT nextval('order_seq') PRIMARY KEY,\r\n    order_date DATE\r\n);\r\n\r"
    },
    {
        "id": ":r1:171",
        "topic": "postgresql",
        "question": "How do you create and use stored procedures in PostgreSQL?\r",
        "answer": " Stored procedures (or functions) encapsulate reusable business logic. PostgreSQL’s PL/pgSQL allows you to write procedural code with loops, conditions, and exception handling.\n \n\nDetailed Explanation:\n-Modularity: Encapsulate business logic in the database.\n-Security: Limit direct table access by exposing functionality through stored procedures.\n-Error Handling: Use exception blocks in PL/pgSQL to manage runtime errors.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\nCREATE OR REPLACE FUNCTION update_salary(emp_id INTEGER, new_salary NUMERIC)\r\nRETURNS VOID AS $$\r\nBEGIN\r\n    UPDATE employees SET salary = new_salary WHERE id = emp_id;\r\nEND;\r\n$$ LANGUAGE plpgsql;\r\n\r\nCall the function with:\r\nSELECT update_salary(1, 85000.00);"
    },
    {
        "id": ":r1:181",
        "topic": "postgresql",
        "question": "How do you write functions in PL/pgSQL?",
        "answer": " PL/pgSQL is PostgreSQL’s procedural language that lets you write functions to perform complex calculations and control flow.\n \n\nMore Details:\n-Input/Output: Define parameters and return types.\n-Control Structures: Use IF, LOOP, WHILE, and other constructs.\n-Usage: Call functions in SQL queries for dynamic computations.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\nCREATE OR REPLACE FUNCTION get_full_name(first_name TEXT, last_name TEXT)\r\nRETURNS TEXT AS $$\r\nBEGIN\r\n    RETURN first_name || ' ' || last_name;\r\nEND;\r\n$$ LANGUAGE plpgsql;"
    },
    {
        "id": ":r1:191",
        "topic": "postgresql",
        "question": "How do you create triggers in PostgreSQL?\r",
        "answer": "Triggers automatically execute specified functions when certain events (INSERT, UPDATE, DELETE) occur on a table.\nDetailed Explanation:\n-Trigger Events: Can be BEFORE, AFTER, or INSTEAD OF DML events.\n-Trigger Variables: TG_TABLE_NAME, TG_OP, etc., provide context.\n-Audit and Logging: Useful for tracking changes without modifying application logic.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example:\r\nCREATE OR REPLACE FUNCTION log_update() RETURNS trigger AS $$\r\nBEGIN\r\n    INSERT INTO audit_log(table_name, change_time, operation)\r\n    VALUES (TG_TABLE_NAME, now(), TG_OP);\r\n    RETURN NEW;\r\nEND;\r\n$$ LANGUAGE plpgsql;\r\n\r\nCREATE TRIGGER update_audit\r\nAFTER UPDATE ON employees\r\nFOR EACH ROW EXECUTE FUNCTION log_update();\r\n\r"
    },
    {
        "id": ":r1:201",
        "topic": "postgresql",
        "question": "What are common table expressions (CTE) in PostgreSQL?",
        "answer": " CTEs allow you to define temporary result sets within a query that can be referenced later. They improve query readability and can be recursive.\n \n\nIn-Depth Details:\n-Recursive CTEs: Enable hierarchical queries (e.g., organizational charts).\n-Modularity: Break down complex queries into manageable parts.\n-Performance: Sometimes materializing CTEs can improve performance, but be aware of optimization differences.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\nWITH recent_orders AS (\r\n    SELECT  FROM orders WHERE order_date > CURRENT_DATE - INTERVAL '7 days'\r\n)\r\nSELECT  FROM recent_orders WHERE total > 100;"
    },
    {
        "id": ":r1:211",
        "topic": "postgresql",
        "question": " How do you use window functions in PostgreSQL?\r",
        "answer": " Window functions perform calculations across a set of table rows related to the current row without collapsing the result set.\n Detailed Explanation:\n-OVER Clause: Defines the window (set of rows) over which the function operates.\n-Usage: Ideal for running totals, moving averages, cumulative sums, and ranking data.\n-Flexibility: Can be combined with grouping and filtering.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:\r\nSELECT name, salary,\r\n       RANK() OVER (ORDER BY salary DESC) AS salary_rank,\r\n       AVG(salary) OVER (PARTITION BY dept_id) AS dept_avg_salary\r\nFROM employees;\r\n\r"
    },
    {
        "id": ":r1:221",
        "topic": "postgresql",
        "question": " How do you perform full-text search in PostgreSQL?\r",
        "answer": " PostgreSQL has built-in full-text search capabilities using the tsvector and tsquery data types, allowing efficient searching of text data.\n\n\nDetailed Explanation:\n1.tsvector: A processed document used for searching.\n2.to_tsquery: Converts a search string into a query.\n3.GIN Index: Optimizes search performance on tsvector columns.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example:\r\nALTER TABLE articles ADD COLUMN document tsvector;\r\nUPDATE articles SET document = to_tsvector('english', title || ' ' || content);\r\n\r\nCREATE INDEX idx_document_gin ON articles USING gin(document);\r\n\r\n-- Searching for articles\r\nSELECT  FROM articles\r\nWHERE document @@ to_tsquery('english', 'postgres & tutorial');"
    },
    {
        "id": ":r1:231",
        "topic": "postgresql",
        "question": "How do you implement partitioning in PostgreSQL?",
        "answer": " Partitioning splits a large table into smaller pieces (partitions) based on a key (range, list, or hash), which can dramatically improve query performance and maintenance.\n \n\nIn-Depth Details:\n1.Management: Each partition can be maintained separately (e.g., vacuumed, indexed).\n2.Query Optimization: Queries that filter by the partition key scan only relevant partitions.\n3.Advanced Partitioning: PostgreSQL also supports list and hash partitioning for different use cases.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example (Range Partitioning):\nCREATE TABLE sales (\n    sale_id SERIAL PRIMARY KEY,\n    sale_date DATE NOT NULL,\n    amount NUMERIC\n) PARTITION BY RANGE (sale_date);\n\nCREATE TABLE sales_2023 PARTITION OF sales\nFOR VALUES FROM ('2023-01-01') TO ('2024-01-01');"
    },
    {
        "id": ":r1:241",
        "topic": "postgresql",
        "question": "What are extensions in PostgreSQL?\r",
        "answer": " Extensions add additional functionality to PostgreSQL without modifying its core. They provide features like geospatial data support, full-text search enhancements, and more.\nAdditional Details:\n1.Wide Range: Extensions such as hstore (for key-value pairs), citext (case-insensitive text), and pg_stat_statements (query performance tracking) are commonly used.\n2.Installation: Many extensions come bundled with PostgreSQL, while others can be installed separately.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example (PostGIS):\r\nCREATE EXTENSION IF NOT EXISTS postgis;\r\n\r"
    },
    {
        "id": ":r1:251",
        "topic": "postgresql",
        "question": "How do you backup and restore PostgreSQL databases?\r",
        "answer": " Backup and restore operations are commonly performed using tools like pg_dump and pg_restore (or psql for plain-text dumps).\r\n \r\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Examples:\n Backup (Custom Format):\npg_dump -U postgres -F c -b -v -f backup_file.dump company_db\n\nRestore:\npg_restore -U postgres -d company_db -v backup_file.dump\n\nDetailed Explanation:\n-pg_dump: Creates a backup that can include schema and data.\n-pg_restore: Restores backups in custom or directory formats, allowing selective restoration.\n-Point-in-Time Recovery: With WAL archiving enabled, you can recover to a specific moment.-"
    },
    {
        "id": ":r1:261",
        "topic": "postgresql",
        "question": "What is replication in PostgreSQL?",
        "answer": " Replication copies data from one PostgreSQL server (primary) to one or more standby servers, enhancing high availability, load balancing, and disaster recovery.\n Detailed Explanation:\n\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "-Streaming Replication: Uses continuous WAL (Write-Ahead Logging) streaming.\n # In postgresql.conf on primary:\nwal_level = replica\nmax_wal_senders = 3\n\n\nSetup: Involves configuring pg_hba.conf for replication connections and using tools like pg_basebackup to initialize standby servers.\nHot Standby: Standby servers can handle read-only queries."
    },
    {
        "id": ":r1:271",
        "topic": "postgresql",
        "question": " How do you optimize queries in MySQL?  ",
        "answer": "Query optimization involves multiple strategies including:  \n- Indexing: Use indexes on columns frequently used in WHERE, JOIN, and ORDER BY clauses.\n- EXPLAIN: Analyze query execution plans to identify bottlenecks.\n  sql\n  EXPLAIN SELECT  FROM orders WHERE customer_id = 10;\n  \n- Query Refactoring: Simplify queries, avoid unnecessary subqueries, and use joins efficiently.\n- Configuration Tuning: Adjust MySQL parameters like `innodb_buffer_pool_size`, `query_cache_size`, and others.\nExtended Details:  \n- Monitoring Tools: Utilize MySQL’s slow query log and performance schema for detailed insights.\n- Schema Design: Normalize or denormalize tables as required for optimal performance.",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": ":r1:281",
        "topic": "postgresql",
        "question": "How do you handle concurrency in MySQL?  ",
        "answer": "MySQL handles concurrency using transaction isolation levels, locking mechanisms, and the inherent capabilities of the InnoDB storage engine.  \n\n- Locking: InnoDB uses row-level locking to minimize contention.\n- Deadlock Handling: MySQL automatically detects deadlocks and rolls back one of the conflicting transactions.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Detailed Explanation:  \n- Isolation Levels: Set levels (e.g., READ COMMITTED, REPEATABLE READ) to balance consistency and performance.\n  sql\n  SET TRANSACTION ISOLATION LEVEL READ COMMITTED;\n  "
    },
    {
        "id": ":r1:291",
        "topic": "postgresql",
        "question": "What are common performance tuning techniques in MySQL? ",
        "answer": "Performance tuning in MySQL involves a combination of query optimization, proper indexing, schema design adjustments, and configuration tuning.  \nDetailed Explanation:  \n- Indexes: Ensure that columns in WHERE, JOIN, and ORDER BY clauses are indexed.\n- EXPLAIN: Use to understand and refine the query execution plan.\n- Configuration: Adjust parameters like `innodb_buffer_pool_size` to maximize memory usage for caching data.\n- Query Caching: Enable and fine-tune the query cache if your workload benefits from it.\n- Monitoring: Use tools like MySQL Enterprise Monitor, Percona Monitoring and Management (PMM), or the performance_schema.",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": ":r1:301",
        "topic": "postgresql",
        "question": "How do you secure a MySQL server?  ",
        "answer": "Securing MySQL involves multiple layers of defense, including server hardening, secure authentication, network controls, and proper privilege management.  \nDetailed Explanation:  \n- mysql_secure_installation: Run this utility to set a strong root password, remove test databases, and disable remote root logins.\n- User Privileges: Grant only the necessary privileges.\n  \n- Network Security: Use firewalls to limit connections, and enforce SSL/TLS for remote connections.\n- Regular Updates: Keep MySQL updated with the latest security patches.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "sql\n  GRANT SELECT, INSERT ON shop_db. TO 'app_user'@'localhost' IDENTIFIED BY 'StrongPassword';\n  "
    },
    {
        "id": ":r1:311",
        "topic": "postgresql",
        "question": "What is the MySQL query optimizer?  ",
        "answer": "\nThe MySQL query optimizer determines the most efficient way to execute a SQL query by evaluating various possible execution plans.  \nDetailed Explanation:  \n- EXPLAIN Command: Use it to see the chosen execution plan and diagnose inefficiencies.\n- Cost-Based Optimization: The optimizer uses table statistics, available indexes, and other metadata to choose the optimal join order and access methods.\n- Hints: In some cases, you can provide optimizer hints to influence the plan if necessary.",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": ":r1:321",
        "topic": "postgresql",
        "question": "How do you monitor MySQL performance?  ",
        "answer": "Monitoring MySQL performance can be achieved by using built-in commands and third-party tools.  \nDetailed Explanation:  \n- SHOW STATUS; Provides server statistics like connections and uptime.\n  sql\n  SHOW STATUS LIKE 'Threads_connected';\n  \n- performance_schema: Offers detailed insight into query performance and resource usage.\n- Slow Query Log: Enables identification of queries that take longer than a specified threshold.\n- Third-Party Tools: Tools like Percona Monitoring and Management (PMM) or MySQL Enterprise Monitor provide real-time dashboards and alerts.",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": ":r1:331",
        "topic": "postgresql",
        "question": "What is a subquery in MySQL?  ",
        "answer": "A subquery is a query nested inside another SQL query that can be used in SELECT, INSERT, UPDATE, or DELETE statements.  \n\nDetailed Explanation:  \n- Use Cases: Often used for dynamic filtering and data comparisons.\n- Correlated Subqueries: Subqueries that reference columns from the outer query can perform row-by-row evaluations.\n",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Example:  \nsql\nSELECT product_name, price\nFROM products\nWHERE price > (SELECT AVG(price) FROM products);\n"
    },
    {
        "id": ":r1:341",
        "topic": "postgresql",
        "question": "How do PostgreSQL and MySQL compare in terms of ACID compliance and performance? ",
        "answer": "Both PostgreSQL and MySQL (with InnoDB) are ACID-compliant, but they have different strengths.  \nDetailed Explanation:  \n- PostgreSQL:  \n  - Excels in complex transactional workloads, advanced SQL features, and extensibility.\n  - Better suited for applications requiring custom data types, full-text search, and high concurrency.\n- MySQL (InnoDB):  \n  - Known for high performance in read-heavy applications and web-based systems.\n  - Provides fast read operations and straightforward replication setups.\n- Choosing Between Them:  \n  - PostgreSQL is often preferred for complex analytical queries and enterprise applications.\n  - MySQL is widely used in web applications and high-read environments due to its simplicity and speed",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    }
]