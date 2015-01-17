
def preDeployFile(f):
    if 'index.html' in f.path:
        f.cache_control = "0, must-revalidate"
