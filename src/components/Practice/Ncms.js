import React, { useEffect, useState } from 'react'
import axios from 'axios'

const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6Inp0aGtzZHJtZ2kiLCJ1c2VyIjp7InVzZXJJZCI6MSwiY3JlYXRlZEF0IjoiMjAyMC0wNC0xNFQxNzozOToyNy41NzVaIiwidXBkYXRlZEF0IjoiMjAyMi0wMi0yMVQwNjoyOToxNy44MzdaIiwidXNlcm5hbWUiOiJ0YXJhayIsInBhc3N3b3JkIjoiVGVzdEAxMjM0NTY3Iiwib2JqZWN0SWQiOiJ6dGhrc2RybWdpIiwibGFzdExvZ2luT24iOiIyMDIyLTAyLTIxVDAwOjU5OjE3LjgzMloiLCJpc1Byb2ZpbGVVcGRhdGVkIjp0cnVlLCJkaXNwbGF5TmFtZSI6InRhcmFrIiwiZW1wbG95ZWVJZCI6InRhcmFrIiwiZGVzaWduYXRpb24iOiJuY21zIiwiZGVwYXJ0bWVudCI6Im5jbXMiLCJjb2xsZWdlTmFtZSI6bnVsbCwiY29sbGVnZUlkIjpudWxsLCJzdGF0ZU5hbWUiOm51bGwsImRpc3RyaWN0TmFtZSI6bnVsbCwicGF5cm9sbENvbGxlZ2VOYW1lIjpudWxsLCJtb2JpbGVOdW1iZXIiOm51bGwsImVtYWlsIjpudWxsLCJwYXBwYXlhRW1wSWQiOm51bGwsIm9mZmljZVR5cGUiOm51bGx9LCJqd3RJRCI6ImVkYzkyM2EzMmM1NzJmNGU5ZGQzMzkxYWZmNDc5NmFhNTIwMDJlODgxNjkzODg0MWJmODdlZWQ3MTZiY2RjMDMiLCJpYXQiOjE2NDU2MTIwNDMsImV4cCI6MTY0NjIxNjg0MywiaXNzIjoiand0LW5sZWFybiJ9.MIGHAkIBiKprj_tloHoga8XR81xO98IYEbM7AZRP3turJWdB4dhEbXzcx9eF8yZ4GjWTY3CcteZRfqOH9aBW1mYcqrDsiw8CQR98Y3IzA14_pTyB43nAW7bZEkkqBVxCUZ3sUumhyWIh0QAN3bfGFrWEUrsBKkr3zd87xeOtX5uWVd4c9CY9frrA'

function Ncms() {
    console.log(process.env)
    const [data, setData] = useState([])
    useEffect(()=>{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        axios.get(`https://prod.gcf.education/ncmsuat/v2/usage/get-metadata`, config)
        .then(res => setData(res.data))
        .catch(err => console.log(err.message))
    },[])
    // console.log(data)
    return (
        <div>
            ncms metadata
        </div>
    )
}

export default Ncms
