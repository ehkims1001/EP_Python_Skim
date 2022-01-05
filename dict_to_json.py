import json

# Create dictionary
dict_ps = \
    {
        'Name': 'John Doe', 
        'Age': 35,
        'City': 'Collingwood'
    }

# Convert to JSON and save to a variable
json_ps = json.dumps(dict_ps, indent = 4)

# Print out JSON variable
print(json_ps)