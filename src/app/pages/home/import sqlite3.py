import sqlite3

def init_db():
    with sqlite3.connect("tasks.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                task TEXT NOT NULL,
                done INTEGER NOT NULL DEFAULT 0
            )
        """)
        conn.commit()

def add_task(task):
    with sqlite3.connect("tasks.db") as conn:
        cursor = conn.cursor()
        cursor.execute(f"INSERT INTO tasks (task) VALUES ('{task}')")
        if cursor.rowcount > 0:
            print("Tarefa adicionada com sucesso!")
        else:
            print("Erro ao adicionar a tarefa.")
        conn.commit()

def list_tasks():
    with sqlite3.connect("tasks.db") as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM TASKS")
        return cursor.fetchall()

def search_tasks(term):
    with sqlite3.connect("tasks.db") as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT id, tasks, done FROM tasks WHERE task LIKE ?", (f"%{term}%",))
        return cursor.fetchall()

def mark_done(task_id):
    with sqlite3.connect("tasks.db") as conn:
        cursor = conn.cursor()
        cursor.execute("UPDATE tasks set done = 1 where id=?", (task_id,))
        if cursor.rowcount > 0:
            print("Tarefa marcada como feita com sucesso!")
        else:
            print("Tarefa nÃ£o encontrada.")
        conn.commit()

def delete_task(task_id):
    with sqlite3.connect("tasks.db") as conn:
        cursor = conn.cursor()
        cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
        if cursor.rowcount > 0:
            print("Tarefa deletada com sucesso!")
        else:
            print("Tarefa nÃ£o encontrada.")
        conn.commit()

def display_tasks(tasks, title="TAREFAS"):
    print(f"\n--- {title} ---")
    if not tasks:
        print("Nenhuma tarefa encontrada.")
    else:
        for t in tasks:
            status = "[X]" if t[2] else "[ ]"
            print(f"{t[0]}. {status} {t[1]}")

def main():
    init_db()
    while True:
        print("\n--- TODO LIST ---")
        print("1. Listar tarefas")
        print("2. Adicionar tarefa")
        print("3. Marcar como feita")
        print("4. Deletar tarefa")
        print("5. Buscar por descriÃ§Ã£o")
        print("6. Sair")

        opcao = input("Escolha uma opÃ§Ã£o: ")

        if opcao == "1":
            display_tasks(list_tasks())
        elif opcao == "2":
            tarefa = input("Digite a tarefa: ")
            add_task(tarefa)
        elif opcao == "3":
            display_tasks(list_tasks())
            id_tarefa = input("Digite o ID da tarefa: ")
            mark_done(id_tarefa)
        elif opcao == "4":
            display_tasks(list_tasks())
            id_tarefa = input("Digite o ID da tarefa para deletar: ")
            delete_task(id_tarefa)
        elif opcao == "5":
            termo = input("Digite a descriÃ§Ã£o para buscar: ")
            resultados = search_tasks(termo)
            display_tasks(resultados, f"RESULTADOS PARA '{termo}'")
        elif opcao == "6":
            break
        else:
            print("OpÃ§Ã£o invÃ¡lida.")

if __name__ == "__main__":
    main()

# SQL Injection
# Estudar para a prova'); DROP TABLE tasks; --
# Sujeira'), ('Ataque 1'), ('Ataque 2'), ('Ataque 3