import time

def add_time(start, duration, day_of_week=None):
    days_of_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    start_time, period = start.split()
    start_hour, start_minute = map(int, start_time.split(':'))
    duration_hour, duration_minute = map(int, duration.split(':'))

    if period == 'PM':
        start_hour += 12

    total_minutes = start_hour * 60 + start_minute + duration_hour * 60 + duration_minute
    end_day = total_minutes // (24 * 60)
    end_hour = (total_minutes // 60) % 24
    end_minute = total_minutes % 60

    if end_hour < 12:
        end_period = 'AM'
    else:
        end_hour -= 12
        end_period = 'PM'

    if end_hour == 0:
        end_hour = 12

    end_time = f"{end_hour}:{end_minute:02d} {end_period}"
    if day_of_week:
        start_day_index = days_of_week.index(day_of_week.lower())
        end_day_index = (start_day_index + end_day) % 7
        end_time += f", {days_of_week[end_day_index].capitalize()}"

    if end_day == 1:
        end_time += " (next day)"
    elif end_day > 1:
        end_time += f" ({end_day} days later)"

    return end_time