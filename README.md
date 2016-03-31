# DataDelimiter
Often at work I end up copying results of a sql query to use in the where clause of another query. I have found delimiters online that will add commas in between data items, but none that will surround each item with quotes, as is needed when using strings in the where clause. It becomes cumbersome when manually adding single quotes around more than a few data items. This app will take input in the form of space delimited data items, and return items delimited by commas, surrounded individually by single quotes, and surrounded as a group by parentheses, ex. 1235 5678 9101 would become ('1235',5678','9101').

Functionality may be added in the future to allow the user to customize output formatting.
