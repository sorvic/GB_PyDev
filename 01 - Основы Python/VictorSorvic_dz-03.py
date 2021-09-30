"""
1. Написать функцию num_translate(), переводящую числительные
от 0 до 10 c английского на русский язык. Например:
>> num_translate("one")
"один"
>> num_translate("eight")
"восемь"
Если перевод сделать невозможно, вернуть None. Подумайте,
как и где лучше хранить информацию, необходимую для перевода:
какой тип данных выбрать, в теле функции или снаружи.
"""

num_eng_rus = {
    'one': 'один',
    'two': 'два',
    'three': 'три',
    'four': 'четыре',
    'five': 'пять',
    'six': 'шесть',
    'seven': 'семь',
    'eight': 'восемь',
    'nine': 'девять'
}


def num_translate(num):
    if num in num_eng_rus.keys():
        print(f'{num} на русском -> {num_eng_rus[num]}\n')
    else:
        print('Проверьте правильность ввода\n'
              'Допустимые форматы ввода:\n'
              'one,two,three,four,five,six,seven,eight,nine; end\n')

# num = 1
# while num != 'end':
#     num = input('Введите число от 0 до 9 на английском языке строкой\n'
#                 'Для завершения напишите "end": ')
#     num_translate(num.lower())
# else:
#     print('END')

"""
2. * (вместо задачи 1) Доработать предыдущую функцию в num_translate_adv():
реализовать корректную работу с числительными, начинающимися с
заглавной буквы — результат тоже должен быть с заглавной. Например:
>>> num_translate_adv("One")
"Один"
>>> num_translate_adv("two")
"два"
"""


def num_translate_adv(num):
    if num[0].isupper() and num_eng_rus.get(num.lower()) != None:
        num = num.lower()
        return num_eng_rus.get(num).capitalize()
    else:
        return num_eng_rus.get(num)

# num_eng = input('Введите число от 0 до 9 на английском языке строкой: ')
# print(num_translate_adv(num_eng))

"""
3. Написать функцию thesaurus(), принимающую в качестве аргументов
имена сотрудников и возвращающую словарь, в котором ключи — первые
буквы имён, а значения — списки, содержащие имена, начинающиеся
с соответствующей буквы. Например:
>>>  thesaurus("Иван", "Мария", "Петр", "Илья")
{
    "И": ["Иван", "Илья"], 
    "М": ["Мария"], "П": ["Петр"]
}
Подумайте: полезен ли будет вам оператор распаковки? Как поступить,
если потребуется сортировка по ключам? Можно ли использовать словарь в этом случае?
"""


def thesaurus(*names):
    name_dict = dict()
    for i in names:
        name_dict.setdefault(i[0], [])
        name_dict[i[0]].append(i)
    return name_dict

# # вывод строкой
# print(f'Вывод строкой: {thesaurus("Иван", "Мария", "Петр", "Илья")}')
# # вывод построчно
# for key, value in thesaurus("Иван", "Мария", "Петр", "Илья", "Виктор", "Василий", "Дарья").items():
#     print(key, value)

"""
4. * (вместо задачи 3) Написать функцию thesaurus_adv(),
принимающую в качестве аргументов строки в формате «Имя Фамилия» и
возвращающую словарь, в котором ключи — первые буквы фамилий,
а значения — словари, реализованные по схеме предыдущего задания
и содержащие записи, в которых фамилия начинается с соответствующей буквы.
Например:
>>>thesaurus_adv("Иван Сергеев", "Инна Серова", "Петр Алексеев", "Илья Иванов", "Анна Савельева")
{
    "А": {
        "П": ["Петр Алексеев"]
    }, 
    "С": {
        "И": ["Иван Сергеев", "Инна Серова"], 
        "А": ["Анна Савельева"]
    }
}
Как поступить, если потребуется сортировка по ключам?
"""


def thesaurus_adv(*names):
    name_dict = {}
    for i in names:
        # first_name, last_name = i.split()
        # print(first_name)
        # print(last_name)
        #print('1 ', i.split())
        last_name = i.split()[1][0]  # берем первый символ Фамилии
        first_name = i.split()[0][0]  # берем первый символ Имени
        name_dict.setdefault(last_name, {})  # формируем словарь фамилий
        #print('2 ', name_dict[last_name])
        name_dict[last_name].setdefault(first_name, [])  # формируем вложенный словарь имен
        #print('3 ', name_dict[last_name][first_name])
        name_dict[last_name][first_name].append(i)  # добавляем полное имя Фамилию во внутр. список
    return name_dict


# for key, value in thesaurus_adv("Иван Сергеев", "Инна Серова", "Петр Алексеев", "Илья Иванов", "Анна Савельева").items():
#     print(key, value)

"""
5. Реализовать функцию get_jokes(), возвращающую n шуток,
сформированных из трех случайных слов, взятых из трёх списков (по одному из каждого):
nouns = ["автомобиль", "лес", "огонь", "город", "дом"]
adverbs = ["сегодня", "вчера", "завтра", "позавчера", "ночью"]
adjectives = ["веселый", "яркий", "зеленый", "утопичный", "мягкий"]
        Например:
>>> get_jokes(2)
["лес завтра зеленый", "город вчера веселый"]
Документировать код функции.
Сможете ли вы добавить еще один аргумент — флаг,
разрешающий или запрещающий повторы слов в шутках
(когда каждое слово можно использовать только в одной шутке)?
Сможете ли вы сделать аргументы именованными?
"""
import random

nouns = ["автомобиль", "лес", "огонь", "город", "дом"]
adverbs = ["сегодня", "вчера", "завтра", "позавчера", "ночью"]
adjectives = ["веселый", "яркий", "зеленый", "утопичный", "мягкий"]


def get_jokes(num):
    '''
    возвращающую n шуток, сформированных из трех случайных слов,
    взятых из трёх списков (по одному из каждого)
    :param num: int
    :return: list
    '''
    jokes = []
    for i in range(num):
        word_1 = random.choice(nouns)
        word_2 = random.choice(adverbs)
        word_3 = random.choice(adjectives)
        jokes.append(f'{word_1} {word_2} {word_3}')
    return jokes

# num = input('Введите число: ')
# print(get_jokes(int(num)))


def get_jokes_adv(num, flag=1):
    jokes = []
    if flag == 1:
        for i in range(num):
            word_1 = random.choice(nouns)
            word_2 = random.choice(adverbs)
            word_3 = random.choice(adjectives)
            jokes.append(f'{word_1} {word_2} {word_3}')
    else:
        while len(nouns) != 0 or len(adverbs) != 0 or len(adjectives) != 0:
            word_1 = random.choice(nouns)
            nouns.remove(word_1)
            word_2 = random.choice(adverbs)
            adverbs.remove(word_2)
            word_3 = random.choice(adjectives)
            adjectives.remove(word_3)
            jokes.append(f'{word_1} {word_2} {word_3}')

    return jokes

print(get_jokes_adv(3))
print(get_jokes_adv(2, 1))
print(get_jokes_adv(12, 0))
print(get_jokes_adv(1, 0))
print(get_jokes_adv(1, 0))
print(get_jokes_adv(5, 0))
print(get_jokes_adv(2, 0))