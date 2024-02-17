# AP Class Insights API Design

---

# Suggestions
## `GET /suggestions`

Request Body: `{"coursesTaken" : [String, ...], "majorOne" : String, "majorTwo" : String}`

Response: `[{"id" : Integer, "name" : String, "scoreDistribution" : [{"score" : 5, "percentage" : Integer}, {"score" : 4, "percentage" : Integer}, {"score" : 3, "percentage" : Integer}, {"score" : 2, "percentage" : Integer}, {"score" : 1, "percentage" : Integer}], "difficulty" : Integer, "description" : String}, ...]`

Errors: 500 (All AP Courses Taken / No Valid Recommendations), 404 (Majors are Invalid), 404 (Courses Taken Are Invalid)