CREATE TABLE productivity_data (
    id INTEGER PRIMARY KEY,
    timestamp TEXT,
    image_path TEXT,
    user_task TEXT,
    gpt_output BOOLEAN,
    image BLOB
);
