# Airport Challenge - JavaScript

## CRC cards

```ruby
class Plane
```

| Responsibilities  | Collaborators |
| --- | --- |
| knows if it's flying | - |

***

```ruby
class Airport
```

| Responsibilities  | Collaborators |
| --- | --- |
| can land a plane | Plane |
| can depart a plane | Plane |
| know if it's at capacity | - |
| know it the weather is story | Weather |

***

```ruby
class Weather
```

| Responsibilities  | Collaborators |
| --- | --- |
| knows if it's stormy | - |

***
