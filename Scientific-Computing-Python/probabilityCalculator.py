import copy
import random

class Hat:
    def __init__(self, **kwargs):
        self.contents = []
        for key in kwargs:
            for i in range(kwargs[key]):
                self.contents.append(key)

    def draw(self, num_balls):
        balls = []
        if num_balls > len(self.contents):
            return self.contents
        for i in range(num_balls):
            ball = random.choice(self.contents)
            self.contents.remove(ball)
            balls.append(ball)
        return balls

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    count = 0
    for i in range(num_experiments):
        expected_copy = copy.deepcopy(expected_balls)
        hat_copy = copy.deepcopy(hat)
        balls_drawn = hat_copy.draw(num_balls_drawn)
        for ball in balls_drawn:
            if ball in expected_copy and expected_copy[ball] > 0:
                expected_copy[ball] -= 1
        if all(value == 0 for value in expected_copy.values()):
            count += 1
    return count / num_experiments