def collect_marks():
    hi = int(input("Enter Hindi Marks:  "))
    en = int(input("Enter English Marks:  "))
    ur = int(input("Enter Urdu Marks:  "))
    ma = int(input("Enter Math Marks:  "))
    
    total = hi + en + ur + ma
    return total

def calc_per(total_marks):
    return (total_marks / 400) * 100

def check_grade(percent):
    if percent >= 80 and percent<=100:
        return 'A'
    elif percent >= 60 and percent <=79:
        return 'B'
    elif percent >= 40 and percent <= 59:
        return 'C'
    elif percent >= 33 and percent <=39:
        return 'D'
    elif percent >=0 and percent <=32:
        return 'Fail'
    else:
        return "Invalid Marks"
    
def main():            
    total = collect_marks()
    per = calc_per(total_marks=total)
    grade = check_grade(percent=per)
    print(grade)
    
main()