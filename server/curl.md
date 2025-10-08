# login and store cookie

"""
curl -i -c /tmp/cj -H "Content-Type: application/json" \
 -d '{"username":"anson","password":"hello123"}' \
 <http://localhost:8080/api/auth>
"""

# confirm session

"""
curl -i -b /tmp/cj <http://localhost:8080/api/auth/status>
"""

# logout

"""
curl -i -b /tmp/cj -X POST <http://localhost:8080/api/auth/logout>
"""

# check that session is gone

"""
curl -i -b /tmp/cj <http://localhost:8080/api/auth/status>
"""
