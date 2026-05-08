import argparse
import subprocess
import sys


def run(command):
    print(f"$ {' '.join(command)}")
    result = subprocess.run(command, text=True)
    if result.returncode != 0:
        sys.exit(result.returncode)


def output(command):
    result = subprocess.run(
        command,
        capture_output=True,
        check=True,
        text=True,
    )
    return result.stdout.strip()


def has_changes():
    return bool(output(["git", "status", "--porcelain"]))


def current_branch():
    return output(["git", "branch", "--show-current"])


def main():
    parser = argparse.ArgumentParser(description="Commit and push the current project to GitHub.")
    parser.add_argument(
        "message",
        nargs="?",
        default="Update site",
        help="Commit message to use. Defaults to 'Update site'.",
    )
    args = parser.parse_args()

    if not has_changes():
        print("No changes to commit.")
        return

    branch = current_branch()
    if not branch:
        print("Could not determine the current Git branch.")
        sys.exit(1)

    run(["git", "add", "."])
    run(["git", "commit", "-m", args.message])
    run(["git", "push", "origin", branch])


if __name__ == "__main__":
    main()
