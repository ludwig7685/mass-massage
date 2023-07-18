with open('id.txt', 'r') as file:
    channel_ids = file.readlines()

channel_ids = [channel_id.strip() for channel_id in channel_ids]
formatted_ids = [f"'{channel_id.strip()}'" for channel_id in channel_ids]
output_string = ', '.join(formatted_ids)

print(output_string)
