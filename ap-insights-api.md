# AP Class Insights API Design

---

# Suggestions

## `GET /suggestions`

Request Body: `{coursesTaken : [String, ...], majorOne : String, majorTwo : String}`

Response: `[{id : String, name : String, scoreDistribution : [{score : 5, percentage : Double}, {score : 4, percentage : Double}, {score : 3, percentage : Double}, {score : 2, percentage : Double}, {score : 1, percentage : Double}], difficulty : Double, description : String}, ...]`

Errors: 500 (All AP Courses Taken), 500 (No Valid Recommendations), 404 (Majors are Invalid), 404 (Courses Taken Are Invalid)
_The 404 errors that are listed should never happen with the website as you will only allow a user to select courses and majors that are valid given your specifications. These 404 errors should only be used when testing the API, so that no one can cause anything to break by sending an API request that is not valid (maliciously or not)._
