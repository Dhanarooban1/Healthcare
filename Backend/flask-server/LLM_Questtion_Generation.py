# from dotenv import load_dotenv
# load_dotenv() 

# import streamlit as st
# import os
# import sqlite3
# import google.generativeai as genai


# genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
# model = genai.GenerativeModel('gemini-pro')


# def get_gemini_response(question, prompt):
#     try:
#         response = model.generate_content([prompt[0], question])
#         return response.text.strip() 
#     except Exception as e:
#         st.error(f"Error generating response: {e}")
#         return None
    
# def read_sql_query(sql, db):
#     try:
#         conn = sqlite3.connect(db)
#         cur = conn.cursor()
#         cur.execute(sql)
#         rows = cur.fetchall()
#         return rows
#     except sqlite3.Error as e:
#         st.error(f"SQL Error: {e}")
#         return str(e)
#     finally:
#         conn.close() 




# # Define the prompt
# prompt = [
#     """
#     You are an expert in converting English questions to SQL query!
#     The SQL database has the name STUDENT and has the following columns - NAME, CLASS, 
#     SECTION. \n\nFor example,\nExample 1 - How many entries of records are present?, 
#     the SQL command will be something like this SELECT COUNT(*) FROM STUDENT ;
#     \nExample 2 - Tell me all the students studying in Data Science class?, 
#     the SQL command will be something like this SELECT * FROM STUDENT 
#     where CLASS="Data Science"; 
#     also the sql code should not have ``` in beginning or end and sql word in output
#     """
# ]


# question = st.text_input("Input your question:", key="input")






#         sql_query = get_gemini_response(question, prompt)
        
#         if sql_query:
#             st.write(f"Generated SQL Query: `{sql_query}`")

#             response = read_sql_query(sql_query, "student.db")
#             if response:
#                 st.subheader("Query Results:")
#                 for row in response:
#                     st.write(row)
#             else:
#                 st.warning("No data found for the given query.")
#         else:
#             st.error("Failed to generate a valid SQL query. Please try again.")
  