class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, category):
        if self.withdraw(amount, f"Transfer to {category.name}"):
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        return amount <= self.get_balance()

    def __str__(self):
        output = self.name.center(30, "*") + "\n"
        for item in self.ledger:
            output += f"{item['description'][:23].ljust(23)}{str('{:.2f}'.format(item['amount'])).rjust(7)}\n"
        output += f"Total: {str(self.get_balance())}"
        return output

def create_spend_chart(categories):
    # Calculate total spend per category
    total_spend = [sum(item['amount'] for item in category.ledger if item['amount'] < 0) for category in categories]
    total = sum(total_spend)
    spend_percent = [int((spend / total) * 10) * 10 for spend in total_spend]

    # Create chart
    chart = "Percentage spent by category\n"
    for i in range(100, -10, -10):
        chart += str(i).rjust(3) + "| "
        for percent in spend_percent:
            if percent >= i:
                chart += "o  "
            else:
                chart += "   "
        chart += "\n"
    chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    # Get longest category name
    longest_name_length = max(len(category.name) for category in categories)

    # Append category names to chart
    for i in range(longest_name_length):
        chart += "     "
        for category in categories:
            if i < len(category.name):
                chart += category.name[i] + "  "
            else:
                chart += "   "
        chart += "\n"

    return chart.rstrip() + "  "