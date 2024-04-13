def arithmetic_arranger(problems, show_answers=True):
    if len(problems) > 5:
        return "Error: Too many problems."
    first_line = ""
    second_line = ""
    dashes_line = ""
    answer_line = ""
    for i, problem in enumerate(problems):
        num1, operator, num2 = problem.split()
        if operator not in ['+', '-']:
            return "Error: Operator must be '+' or '-'."
        if not num1.isdigit() or not num2.isdigit():
            return "Error: Numbers must only contain digits."
        if len(num1) > 4 or len(num2) > 4:
            return "Error: Numbers cannot be more than four digits."
        if operator == "+":
            answer = int(num1) + int(num2)
        else:
            answer = int(num1) - int(num2)
        width = max(len(num1), len(num2)) + 2
        first_line += num1.rjust(width)
        second_line += operator + num2.rjust(width - 1)
        dashes_line += "-" * width
        answer_line += str(answer).rjust(width)
        if i < len(problems) - 1:
            first_line += "    "
            second_line += "    "
            dashes_line += "    "
            answer_line += "    "
    if show_answers:
        arranged_problems = first_line + "\n" + second_line + "\n" + dashes_line + "\n" + answer_line
    else:
        arranged_problems = first_line + "\n" + second_line + "\n" + dashes_line
    return arranged_problems

print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')
