from geopy.distance import vincenty

exec(open("../coords.js", 'r').read())
exec(open("../mask.py", 'r').read())

print("coords = [")
for point in coords:
    keep = True
    for m in mask:
        dist = vincenty(point, m).meters
        if dist < 100:
            keep = False
            break
    if not keep:
        continue
    print("[{0:f}, {1:f}],".format(point[0], point[1]))
print("]")
