# Data model

![[Topics|id;label;ordinalPosition]->children*[Topics]
  [Topics]->dataItems*[Data items|id;label;description;ordinalPosition;lifelinesID]
  [Data items]->ageGroups*[Age Groups]
  [Data items]->sexGroups*[Sex]
  [Data items]->subcohorts*[Subcohorts]
  [Data items]->collections*[Collection rounds]](http://yuml.me/8d4795ba.png)

# Data hacking

To fill the mref table for Topics.dataItems if you have a comma separated list of 
topic labels in the topics column of the data item table:

```
insert into "aaaacz6qmgqlklqweo7jha#874fc03f_dataItems" (id, "dataItems", "order")
select topics.id                   as topicId,
       dataItems."ordinalPosition" as dataItemId,
       dataItems."ordinalPosition" as "order"
from
  (
    select regexp_split_to_table(topics, ',') as topicLabel, "ordinalPosition"
    from "aaaacz6qpcflylqweo7jhaiaae#91c5c20d"
  ) as dataItems
    join "aaaacz6qmgqlklqweo7jhaiaae#874fc03f" as topics
         on topics.label = dataItems.topicLabel
order by dataItems.topicLabel
```